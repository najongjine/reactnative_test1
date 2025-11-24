import React, { useEffect, useState } from "react";
import { Appearance, StyleSheet, Text, TextInput, View } from "react-native";

export default function TestPage1() {
  // 현재 색상 스키마를 가져옵니다 (light 또는 dark)
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const [mytext, setMytext] = useState<string>("");

  // ⭐️ 스키마 변경을 감지하고 상태를 업데이트합니다.
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  // 현재 스키마에 따라 스타일 객체를 선택합니다.
  const isDark = colorScheme === "dark";
  const themeStyles = isDark ? darkStyles : lightStyles;

  function onTextInputChange(e: string) {
    // 요거랑 비슷해요. mytext=e;
    setMytext(e);
  }
  function myadd() {
    let add_operator = mytext.includes(`+`);
    if (add_operator) {
      let str_nums = mytext.split("+");
      console.log(`str nums: `, str_nums);
      let num1 = Number(str_nums[0]);
      console.log(`num1: `, num1);
      let num2 = Number(str_nums[1]);
      console.log(`num2: `, num2);
      let result = num1 + num2;
      console.log(`result: `, result);
      alert(result);
    }
  }

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={themeStyles.text}>
        현재 테마: {colorScheme === "dark" ? "다크 모드" : "라이트 모드"}
      </Text>
      <TextInput
        value={mytext}
        style={[styles.input, themeStyles.input]}
        placeholderTextColor={isDark ? "#AAAAAA" : "#666666"}
        placeholder="텍스트를 입력하세요"
        onChangeText={onTextInputChange}
        onSubmitEditing={myadd}
      />
      <View>
        <Text>mytext : {mytext}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderColor: "#CCCCCC",
    color: "#000000",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  text: {
    color: "#E0E0E0",
  },
  input: {
    backgroundColor: "#2C2C2C",
    borderColor: "#444444",
    color: "#FFFFFF",
  },
});
