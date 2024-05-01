import { GrommetIconsInstall } from '@/components/Icons/CustomIcons';
import React from 'react';
import { Col, message, Modal, Result, Row, Typography } from 'antd';
import { DotLottiePlayer, PlayMode } from '@dotlottie/react-player';
import { ProCard, ProFormText } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-form/lib';
import SSHConnectionForm from '@/components/DeviceConfiguration/SSHConnectionForm';
import { putDevice } from '@/services/rest/device';

export type NewUnManagedDeviceModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};
const { Text } = Typography;

const NewUnManagedDeviceModal: React.FC<NewUnManagedDeviceModalProps> = (
  props,
) => {
  const [deviceUuid, setDeviceUuid] = React.useState<string | undefined>();
  const handleCancel = () => {
    setDeviceUuid(undefined);
    props.setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={
          <>
            <GrommetIconsInstall />
            &nbsp; Register an unmanaged device (without agent)
          </>
        }
        open={props.isModalOpen}
        onCancel={handleCancel}
        onOk={handleCancel}
        width={900}
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        footer={(_, { OkBtn, CancelBtn }) => (
          <>{(deviceUuid && <OkBtn />) || <CancelBtn />}</>
        )}
      >
        <Row style={{ alignItems: 'center' }} justify="center">
          <Col span={12}>
            <DotLottiePlayer
              src="/Animation-1709649662243.json"
              autoplay
              loop
              intermission={5000}
              playMode={PlayMode.Bounce}
              style={{ height: '90%', width: '90%', alignSelf: 'center' }}
            />
          </Col>
          <Col span={12}>
            <ProCard>
              {(!deviceUuid && (
                <ProForm
                  onFinish={async (values) => {
                    if (values) {
                      await putDevice(values.deviceIp, {
                        authType: values.authType,
                        sshPort: values.sshPort,
                        sshUser: values.sshUser,
                        sshPwd: values.sshPwd,
                        sshKey: values.sshKey,
                        becomeUser: values.becomeUser,
                        becomeMethod: values.becomeMethod,
                        becomePass: values.becomePass,
                        strictHostChecking: values.strictHostChecking,
                      }).then((res) => {
                        setDeviceUuid(res.data.device.uuid);
                      });
                    } else {
                      message.error({
                        content: `Internal - Calling creation modal without values form undefined`,
                        duration: 6,
                      });
                    }
                  }}
                >
                  <SSHConnectionForm />
                </ProForm>
              )) || (
                <Result
                  status="success"
                  title="Successfully Registered Unmanaged Device"
                  subTitle={
                    <>
                      <Text>Registered device with uuid</Text>
                      <br />
                      <Text code>{deviceUuid}</Text>
                    </>
                  }
                />
              )}
            </ProCard>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default NewUnManagedDeviceModal;
