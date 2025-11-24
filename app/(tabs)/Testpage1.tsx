import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Testpage1() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.stepContainer}>계산기</Text>
      </View>
      <View>
        <TextInput placeholder="입력해 주세요" />
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
    margin: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
