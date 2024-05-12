import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TSneakers } from "../../types/sneakers.type";
import { colors } from "../../constants/colorts.constant";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const ListItem = ({ item, isOpen }: { item: TSneakers; isOpen: boolean }) => {
  const height = useSharedValue(80);

  const listItemStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(isOpen ? 80 : 0),
    };
  });

  return (
    <Animated.View style={[styles.container, listItemStyle]}>
      <Image source={item.photo} style={styles.image} />
      <View style={styles.infoCont}>
        <View>
          <Text style={styles.model}>{item.model}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
        <Text style={styles.price}>{item.price}€</Text>
      </View>
    </Animated.View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    overflow: "hidden",
    marginVertical: 6,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 8,
  },
  infoCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  model: {
    fontSize: 18,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  brand: {
    fontSize: 14,
    color: colors.textSecondary,
    fontStyle: "italic",
  },
  price: {
    fontSize: 20,
    color: colors.textPrimary,
  },
});
