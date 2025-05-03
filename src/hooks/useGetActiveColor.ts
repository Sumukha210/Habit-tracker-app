import { useThemeStore } from '@/src/store/theme';
import { accentColors, AccentColorVariantType } from '@/src/theme/palette';

const useGetActiveColor = (...color: AccentColorVariantType[]) => {
  const activeColor = useThemeStore((state) => state.accentColor);
  return color.map((c) => accentColors[activeColor][c]);
};

export default useGetActiveColor;
