import { Logger } from 'pino';
import { debounce } from 'lodash';
import { SsmEvents } from 'ssm-shared-lib';
import App from '../../App';
import EventManager from '../../core/events/EventManager';
import Events from '../../core/events/events';
import log from '../../logger';

const eventsToHandle = [
  {
    event: Events.UPDATED_CONTAINERS,
    ssmEvent: SsmEvents.Update.CONTAINER_CHANGE,
    logMessage: 'Containers updated',
    debounceTime: 5000,
  },
  {
    event: Events.UPDATED_NOTIFICATIONS,
    ssmEvent: SsmEvents.Update.NOTIFICATION_CHANGE,
    logMessage: 'Notifications updated',
    debounceTime: 5000,
  },
  // Add any additional events here
];

class RealTimeEngine extends EventManager {
  private readonly childLogger: Logger<never>;

  constructor() {
    super();
    this.childLogger = log.child(
      { module: 'RealTimeEngine' },
      { msgPrefix: '[REALTIME_ENGINE] - ' },
    );

    this.on(Events.APP_STARTED, () => {
      this.init();
    });
  }

  private createDebouncedEmitter(eventName: string, logMessage: string, debounceTime: number) {
    return debounce(() => {
      const io = App.getSocket().getIo();
      this.childLogger.debug(`${logMessage}`);
      io.emit(eventName);
    }, debounceTime);
  }

  public init() {
    try {
      this.childLogger.info('init...');

      eventsToHandle.forEach(({ event, ssmEvent, logMessage, debounceTime }) => {
        const debouncedEmitter = this.createDebouncedEmitter(ssmEvent, logMessage, debounceTime);
        this.on(event, debouncedEmitter);
      });
    } catch (error: any) {
      this.childLogger.error(error);
    }
  }
}

export default new RealTimeEngine();
