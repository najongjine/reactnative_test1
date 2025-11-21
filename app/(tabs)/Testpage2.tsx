import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Testpage2() {
  return (
    <ScrollView>
      <View>
        <Text>test2 페이지 에요</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
