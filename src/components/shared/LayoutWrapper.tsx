import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';
import Feather from '@expo/vector-icons/Feather';
import { palette } from '@/src/theme/palette';
import { useRouter } from 'expo-router';

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

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 20,
    paddingRight: insets.right + 20,
  };

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
      <View style={{ paddingTop: insets.top, paddingLeft: insets.left + 20, paddingRight: insets.right + 20 }} className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          {leftBtnType !== 'none' ? (
            <TouchableOpacity onPress={handleLeftBtnPress}>
              <Feather name={leftBtnType === 'menu' ? 'menu' : 'chevron-left'} size={32} color={palette.accent.secondary} />
            </TouchableOpacity>
          ) : null}

          {title ? <Text className="text-3xl text-text-primary font-semibold">{title}</Text> : null}
        </View>

        <View>
          {onAddIconPress ? (
            <TouchableOpacity onPress={onAddIconPress}>
              <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={[containerStyle]} className={twMerge('pt-4', viewClassName)}>
        {children}
      </View>
    </View>
  );
};

export default LayoutWrapper;
