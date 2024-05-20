import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import styles from "./home.style";

export default function Home() {
  const headerHeight = useSharedValue(80);
  const searchTranslateX = useSharedValue(-500);

  const handleSearchPress = () => {
    headerHeight.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    searchTranslateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  };

  const handleBackPress = () => {
    headerHeight.value = withTiming(80, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    searchTranslateX.value = withTiming(-500, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  };

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
      overflow: "hidden",
    };
  });

  const searchStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: searchTranslateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerCont, headerStyle]}>
        <Text style={styles.logo}>Search App</Text>
        <Pressable onPress={handleSearchPress}>
          <Feather name="search" color="#93EDC7" size={30} />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
          searchStyle,
        ]}
      >
        <Pressable style={styles.backCont} onPress={handleBackPress}>
          <Feather name="chevron-left" color="#ABB7C2" size={23} />
        </Pressable>
        <View style={styles.searchCont}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#ABB7C2"
            style={styles.input}
          />
          <Feather name="search" color="#ABB7C2" size={23} />
        </View>
      </Animated.View>
    </View>
  );
}
