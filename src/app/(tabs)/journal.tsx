import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Journal = () => {
  return (
    <LayoutWrapper title="Journal" leftBtnType="none">
      <View>
        <Text>Journal</Text>

        <ScrollView className="h-full" contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
          <Text className="text-3xl text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt vero, dicta eaque fugiat ad quaerat voluptates optio sequi eius, nam aperiam libero
            reprehenderit perferendis dolor consectetur praesentium nobis quod esse magnam? Repellat impedit, dignissimos esse doloremque, quibusdam ipsa similique exercitationem
            voluptates distinctio quasi non voluptatem totam delectus perspiciatis! Eligendi aperiam dolorem doloribus labore illum aut commodi assumenda ipsa omnis, distinctio
            tenetur eos. Dicta fuga tenetur modi odit voluptas aliquam cumque rerum. Sed a, officiis quae ipsa temporibus iure nostrum cumque quis aspernatur magni, dignissimos in
            quo id, nisi officia doloribus! Voluptates laudantium sapiente obcaecati provident itaque amet, nesciunt quam quas, similique quidem tenetur dolor fuga unde aut at.
            Aperiam maxime expedita similique officiis excepturi molestiae? Voluptas atque placeat obcaecati voluptate praesentium impedit cum reiciendis quo quos similique quod
            blanditiis maiores nostrum perferendis architecto, aut quisquam earum in eligendi explicabo consectetur. Eos fugit, enim sunt fuga tempora neque pariatur magnam
            delectus quod voluptates voluptatibus quo quisquam. Rerum voluptate sequi veritatis harum at officia, ad repellat minima facere, earum iure incidunt odit quidem dicta,
            maiores perferendis. Rerum, consectetur dolores perferendis repellat, animi magnam sed quia iste, illum accusantium qui voluptate aliquam veritatis. Assumenda sapiente
            modi in adipisci? Dolore officiis nulla doloribus.
          </Text>
        </ScrollView>
      </View>
    </LayoutWrapper>
  );
};

export default Journal;
