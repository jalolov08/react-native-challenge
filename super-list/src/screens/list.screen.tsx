import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colorts.constant";
import { Feather } from "@expo/vector-icons";
import { sneakers } from "../constants/sneakers.constant";
import ListItem from "../components/ListItem/listItem.component";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rotation = useSharedValue(0);
  const scaleY = useSharedValue(0);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
    rotation.value = withTiming(isOpen ? 0 : 1);
    if (isOpen) {
      scaleY.value = withTiming(0, { duration: 250 });
    } else {
      scaleY.value = withTiming(1, { duration: 250 });
    }
  };

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value * 180}deg`,
        },
      ],
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: scaleY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.head} onPress={toggleList}>
        <Text style={styles.title}>Sneakers</Text>
        <Animated.View style={[styles.iconCont, rotateStyle]}>
          <Feather name="chevron-down" size={24} color={colors.textPrimary} />
        </Animated.View>
      </Pressable>
      <Animated.View style={[styles.listContainer, containerStyle]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {sneakers.map((item) => {
            return <ListItem item={item} key={item.id} isOpen={isOpen} />;
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    padding: 17,
    paddingBottom: 0,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  iconCont: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    overflow: "hidden",
    paddingBottom: 100,
  },
});
