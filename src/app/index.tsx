import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-yellow-500"
    >
      <Text className="bg-purple-200 text-white p-4 rounded-lg text-lg font-bold">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
