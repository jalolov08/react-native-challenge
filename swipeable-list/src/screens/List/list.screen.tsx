import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import users from "../../constants/users.constant";
import ListItem from "../../components/ListItem/listItem.component";
import { ScrollView } from "react-native-gesture-handler";

const List = () => {
  const ref = useRef<ScrollView>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      <ScrollView showsVerticalScrollIndicator={false} ref={ref}>
        {users.map((user) => (
          <ListItem simultaneousHandlers={ref} user={user} key={user.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 17,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
  },
});
