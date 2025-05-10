import { palette } from '@/src/theme/palette';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

interface NavbarProps {
  title?: string;
  onAddIconPress?: (() => void) | null;
  leftBtnType?: 'menu' | 'back' | 'none';
  handleLeftBtnPress?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, onAddIconPress, leftBtnType, handleLeftBtnPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingLeft: insets.left + 20, paddingRight: insets.right + 20 }} className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        {leftBtnType !== 'none' ? (
          <TouchableOpacity onPress={handleLeftBtnPress}>
            <Feather name={leftBtnType === 'menu' ? 'menu' : 'chevron-left'} size={32} color={palette.text.primary} />
          </TouchableOpacity>
        ) : null}

        {title ? <Text className="text-3xl text-accent-primary font-semibold">{title}</Text> : null}
      </View>

      <View>
        {onAddIconPress ? (
          <LinearGradient
            colors={[palette.accent.light, palette.accent.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 50,
              padding: 8,
            }}
            className="bg-accent-primary"
          >
            <TouchableOpacity onPress={onAddIconPress}>
              <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        ) : null}
      </View>
    </View>
  );
};

export default Navbar;
