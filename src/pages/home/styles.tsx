import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.black400,
  },

  body: {
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 0,
  },

  cardHeader: {
    zIndex: 0,
    height: 290,
    padding: 24,
    backgroundColor: '#1e90ff',
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    textAlign: "center",
    color: variables.colors.black500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },

  iconInput: {
    position: "absolute",
    top: "30%",
    left: 24,
  },

  input: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.black500,
    padding: 8,
    marginTop: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#c8c8c8"
  },

  searchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 150,
    borderRadius: 4,
  },

  info: {
    textAlign: "center",
    color: variables.colors.gray500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
  },
});

export default styles;
