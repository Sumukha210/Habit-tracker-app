import React, { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  className?: string;
}

/**
 * A wrapper component for screens that applies consistent safe area insets
 * and theme-based background colors
 */
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, scroll = false, style, contentContainerStyle, className }) => {
  const insets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 20,
    paddingRight: insets.right + 20,
    ...style,
  };

  if (scroll) {
    return (
      <ScrollView style={[containerStyle]} contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View className={className} style={[containerStyle]}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
