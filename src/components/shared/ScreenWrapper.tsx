import { useTheme } from '@/src/theme/ThemeProvider';
import React, { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

/**
 * A wrapper component for screens that applies consistent safe area insets
 * and theme-based background colors
 */
export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, scroll = false, style, contentContainerStyle }) => {
  const { isDarkMode } = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    ...style,
  };

  if (scroll) {
    return (
      <ScrollView style={[containerStyle, { backgroundColor: isDarkMode ? '#121212' : '#F8F9FA' }]} contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    );
  }

  return <View style={[containerStyle, { backgroundColor: isDarkMode ? '#121212' : '#F8F9FA' }]}>{children}</View>;
};
