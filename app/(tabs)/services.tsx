import Footer from "@/components/Footer"; // adjust the path if needed
import { StyleSheet, View } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // to match your app’s dark theme
    // justifyContent: "flex-end",
    justifyContent: "center",
  },
});
