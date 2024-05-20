import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#101828",
    flex: 1,
    padding: 17,
  },
  logo: {
    fontSize: 22,
    color: "#93EDC7",
  },
  headerCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchCont: {
    width: "85%",
    height: 50,
    backgroundColor: "#0D0B26",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  backCont: {
    width: 50,
    height: 50,
    backgroundColor: "#0D0B26",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    fontSize: 18,
    color: "#fff",
  },
});
