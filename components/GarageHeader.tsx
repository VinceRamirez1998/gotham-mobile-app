import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

export default function GarageHeader() {
  return (
    <View>
      {/* Logo and User Icon */}
      <View style={styles.topRow}>
        <Image
          source={require("@/assets/images/gothamlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Ionicons name="notifications-circle-outline" size={28} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },
  logo: {
    height: 24,
    width: 120,
  },
  welcome: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    marginTop: 16,
    marginBottom: 8,
  },
  promo: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 16,
  },
});
