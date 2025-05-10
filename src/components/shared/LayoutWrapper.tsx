import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'expo-router';
import Navbar from '@/src/components/shared/Navbar';

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  viewClassName?: string;
  onAddIconPress?: () => void | null;
  title?: string;
  leftBtnType?: 'menu' | 'back' | 'none';
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, className, viewClassName, onAddIconPress = null, title, leftBtnType = 'menu' }) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // const containerStyle: ViewStyle = {
  //   flex: 1,
  //   paddingBottom: insets.bottom,
  //   paddingLeft: insets.left + 20,
  //   paddingRight: insets.right + 20,
  // };

  const handleLeftBtnPress = () => {
    if (leftBtnType === 'back') {
      router.back();
      return;
    }

    if (leftBtnType === 'menu') {
      console.log('Menu button pressed');
      return;
    }
  };

  return (
    <View className={twMerge('bg-background-primary flex-1', className)}>
      <Navbar title={title} onAddIconPress={onAddIconPress} leftBtnType={leftBtnType} handleLeftBtnPress={handleLeftBtnPress} />

      <View
        className={twMerge('pt-4', viewClassName)}
        style={{
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default LayoutWrapper;
