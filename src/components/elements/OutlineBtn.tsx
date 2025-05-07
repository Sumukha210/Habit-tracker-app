import useGetActiveColor from '@/src/hooks/useGetActiveColor';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface OutlineBtnProps {
  title: string;
  onPress: () => void;
  className?: string;
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ title, onPress, className }) => {
  const [borderBg] = useGetActiveColor('primary');

  return (
    <TouchableOpacity className={twMerge(`rounded-md self-start border-[2px] px-8 py-2`, className)} style={{ borderColor: borderBg }} onPress={onPress}>
      <Text className={`text-xl font-semibold`} style={{ color: borderBg }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineBtn;
