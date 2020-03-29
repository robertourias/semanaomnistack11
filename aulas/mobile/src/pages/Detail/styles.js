import { StyleSheet } from "react-native";
import Constant from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constant.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    marginTop: 48,
    marginBottom: 16,
    backgroundColor: "#FFF"
  },

  incidentProperty: {
    marginTop: 24,
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380"
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF"
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "space-between",
    alignItems: "center"
  },

  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 50
  }
});
