import { TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '@/src/components/shared/ScreenWrapper';
import useGetActiveColor from '@/src/hooks/useGetActiveColor';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Tasks = () => {
  const router = useRouter();
  const [btnPrimaryColor] = useGetActiveColor('actionButton');

  const handleAddTask = () => {
    router.navigate({ pathname: '/saveTask', params: { id: 'create', mode: 'create' } });
  };

  return (
    <ScreenWrapper scroll={false}>
      <View className="flex-1">
        {/* add task btn */}
        <View className="absolute bottom-0 right-0">
          <TouchableOpacity className="h-20 w-20 flex items-center justify-center rounded-full " style={{ backgroundColor: btnPrimaryColor }} onPress={handleAddTask}>
            <Feather name="plus" size={42} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Tasks;
