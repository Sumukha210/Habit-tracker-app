import { ScreenWrapper } from '@/src/components/shared/ScreenWrapper';
import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { Text, View } from 'react-native';

const Journal: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <ScreenWrapper scroll>
      <View className="p-4">
        <Text className={`text-3xl mb-4 ${isDarkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}>Hello Journal</Text>
        <Text className={`${isDarkMode ? 'text-text-secondary-dark' : 'text-text-secondary'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta neque nesciunt omnis repudiandae mollitia inventore optio officia praesentium natus quibusdam
          voluptatem, rerum, libero ducimus. Natus maxime magni facere impedit repellat consequuntur? Est, porro iure! Quo culpa, quidem consectetur reprehenderit beatae fuga
          totam! Consequatur magni repellat qui nisi fugiat quaerat, quos ut? Cumque, nihil illum. Assumenda eos eveniet aspernatur facere soluta animi voluptatibus omnis beatae
          voluptas necessitatibus. Eaque amet quam aut consequatur aspernatur, dolorum, facilis asperiores sed harum dignissimos quos dolores voluptatibus explicabo esse
          reprehenderit id obcaecati officiis nemo rerum! Suscipit laborum ipsam expedita voluptatum eum obcaecati tempora reiciendis, debitis hic amet unde ea eaque. Beatae quidem
          suscipit maiores, reprehenderit veritatis minima a modi expedita recusandae quisquam quos, quod eius sapiente inventore ratione. Neque, officiis! Aliquam ad velit,
          facere, similique sunt corporis temporibus, eius adipisci exercitationem eligendi eum veritatis assumenda! Aliquam sint aut voluptates explicabo alias eaque! Sunt aperiam
          facere non? Explicabo fuga perferendis eius, ut nam, tempora, minima repudiandae ipsum dolorem repellendus aspernatur alias autem numquam iure inventore! Velit qui, ut
          cum nulla sit nesciunt accusantium. Deleniti, esse! Optio dolorum iste doloremque numquam reiciendis ullam odit qui minus exercitationem, libero nam doloribus praesentium
          quibusdam iusto facere ipsam tempora nisi modi. Impedit pariatur accusantium itaque, eum ratione veniam eaque facere odio cum suscipit enim, numquam obcaecati? Enim
          sapiente pariatur exercitationem accusamus odit molestiae quasi recusandae ex aperiam neque provident ipsam explicabo, sed repellat consectetur assumenda ratione quam.
          Quam quibusdam soluta accusantium autem dolorem minus repellendus corrupti, inventore quidem officiis molestiae ex commodi neque voluptatum ullam quae, repellat
          aspernatur nobis expedita. Perspiciatis at enim ad modi. Commodi in deleniti expedita? Rem fuga, culpa ipsam magnam dolorem cupiditate quasi impedit quam molestias? Qui
          earum sequi beatae hic labore explicabo. Doloribus, ratione architecto. Quia, alias! Cum iste labore magnam illo quas officia enim nam sequi ad modi. Autem a
          necessitatibus nobis dicta quam facilis quod commodi similique. Voluptatem, sint? Vero pariatur fugit atque possimus, accusamus veritatis. Nesciunt dolore aut harum
          delectus consequuntur? Ab consectetur accusantium ratione commodi ullam praesentium minus iusto accusamus voluptatibus, tenetur quos nostrum deserunt temporibus est,
          ipsam atque dolore cupiditate! Cupiditate repellat similique, tempora natus perspiciatis doloremque veritatis debitis tempore eligendi, ad nobis odio dolorum, illum
          necessitatibus iste dolor quod modi saepe. Pariatur aliquid, nesciunt fugit modi non minus quidem laudantium perspiciatis quod veniam iusto at sed rerum cum placeat! Quis
          sed corrupti libero autem hic incidunt animi laudantium labore? Quasi, voluptatibus. Quisquam, cumque! Repudiandae, doloremque
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Journal;
