import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import users from "../../constants/users.constant";
import ListItem from "../../components/ListItem/listItem.component";

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((user) => (
          <ListItem user={user} key={user.id}  />
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
