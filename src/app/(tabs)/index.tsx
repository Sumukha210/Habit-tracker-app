import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Index = () => {
  return (
    <LayoutWrapper title="Habits" onAddIconPress={() => console.log('Habits icon pressed')}>
      <View>
        <Text className="text-red-400">Index</Text>

        <ScrollView>
          <Text className="text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, necessitatibus, expedita beatae quos consectetur, esse tenetur et sit impedit voluptate accusamus
            maxime quis possimus ipsa voluptatum libero tempora ratione molestias iure eligendi vitae quasi? Cumque odio quasi reprehenderit quo officiis ex adipisci natus placeat,
            minima non id, excepturi unde quas dicta vitae itaque harum dolorem reiciendis. Quam nisi necessitatibus a! Itaque, ducimus excepturi est deserunt ipsum praesentium
            illo ab voluptates, ea ipsa velit sit exercitationem vel, qui nemo unde rerum molestias veritatis facere ipsam alias expedita. Perferendis rem assumenda possimus
            cumque! Pariatur soluta sint nesciunt rem consequatur minus alias odit!
          </Text>
        </ScrollView>
      </View>
    </LayoutWrapper>
  );
};

export default Index;
