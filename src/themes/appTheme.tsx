import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  result: {
    color: "white",
    fontSize: 60,
    marginBottom: 20,
    textAlign: "right",
  },
  previousResults: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10
  }
})

export default commonStyles;
