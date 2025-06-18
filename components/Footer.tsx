// components/Footer.tsx
import { Image, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <Image
      source={require("@/assets/images/background-car.png")}
      style={styles.footerImage}
    />
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: "100%",
    height: 264,
    marginTop: 0,
    borderRadius: 0,
  },
});
