import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { message, Skeleton } from 'antd';
import { Tiny } from '@ant-design/plots';
import { DeviceStatType } from '@/components/Charts/DeviceStatType';
import { getDeviceStat } from '@/services/rest/devicestat';

export type TinyRingProps = {
  deviceUuid: string;
  type: DeviceStatType;
};

const TinyRingProgressDeviceIndicator: React.FC<TinyRingProps> = ({
  deviceUuid,
  type,
}) => {
  const [value, setValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const asyncFetch = useCallback(async () => {
    try {
      const res = await getDeviceStat(deviceUuid, type, {});
      if (res.data && !isNaN(res.data.value)) {
        setValue(res.data.value);
      } else {
        setValue(NaN);
      }
    } catch (error: any) {
      message.error({ content: error.message, duration: 8 });
      setValue(NaN);
    } finally {
      setIsLoading(false);
    }
  }, [deviceUuid, type]);

  useEffect(() => {
    void asyncFetch();
  }, [asyncFetch]);

  const config = useMemo(
    () => ({
      percent: 1,
      width: 50,
      height: 50,
      innerRadius: 0.85,
      radius: 0.98,
      loading: false,
      annotations: [
        {
          type: 'text',
          style: {
            text: `${value ?? ''}`,
            x: '50%',
            y: '40%',
            textAlign: 'center',
            fontSize: 12,
            fill: 'rgba(232,237,243,0.9)',
            fontStyle: 'bold',
          },
        },
        {
          type: 'text',
          style: {
            text: 'Services',
            x: '48%',
            y: '60%',
            textAlign: 'center',
            fontSize: 8,
            fill: 'rgba(232,237,243,0.9)',
            fillOpacity: 0.95,
            fontStyle: 'normal',
          },
        },
      ],
    }),
    [value],
  );

  return isLoading || isNaN(value as number) ? (
    <Skeleton.Avatar active size="large" shape="circle" />
  ) : (
    <Tiny.Ring {...config} />
  );
};

export default React.memo(TinyRingProgressDeviceIndicator);
