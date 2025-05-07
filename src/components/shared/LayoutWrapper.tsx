import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  viewClassName?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, className, viewClassName }) => {
  const insets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 20,
    paddingRight: insets.right + 20,
  };

  return (
    <View className={twMerge('bg-background-primary flex-1', className)}>
      <View style={[containerStyle]} className={viewClassName}>
        <>{children}</>
      </View>
    </View>
  );
};

export default LayoutWrapper;
