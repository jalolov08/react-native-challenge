import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { User } from "../../types/user.type";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
interface ListItemProp
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  user: User;
}
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;



const ListItem: React.FC<ListItemProp> = ({ user , simultaneousHandlers }) => {
  const translateX = useSharedValue(0);
  const contHeight = useSharedValue(80);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeMissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeMissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        contHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });
  const viewStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  const contStyle = useAnimatedStyle(() => ({
    height: contHeight.value,
    marginVertical: marginVertical.value,
    opacity: opacity.value,
  }));
  return (
    <Animated.View
      style={[{ marginVertical: 10, marginHorizontal: 5 }, contStyle]}
    >
      <Animated.View style={[styles.deleteCont]}>
        <Feather name="trash-2" size={32} color="#fff" />
      </Animated.View>
      <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
        <Animated.View style={[styles.container, viewStyle]}>
          <Image source={user.photo} style={styles.photo} />
          <View style={styles.infoContainer}>
            <Text style={styles.fullName}>{user.fullName}</Text>
            <Text style={styles.lastMessage}>{user.lastMessage}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 1,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  deleteCont: {
    width: "100%",
    height: 80,
    paddingRight: 20,
    backgroundColor: "red",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    right: 0,
    borderRadius: 10,
  },
});
