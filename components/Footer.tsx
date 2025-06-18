// components/Footer.tsx
import {
  Image,
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

export default function Footer() {
  const socials = [
    {
      icon: require("@/assets/icons/internet.png"),
      url: "https://gothamautoworks.com",
    },
    {
      icon: require("@/assets/icons/facebook.png"),
      url: "https://facebook.com/gothamautoworks",
    },
    {
      icon: require("@/assets/icons/instagram.png"),
      url: "https://instagram.com/gothamautoworks",
    },
  ];

  return (
    <ImageBackground
      source={require("@/assets/images/footer.png")}
      style={styles.footerImage}
    >
      <View style={styles.socialContainer}>
        {socials.map((item, index) => (
          <Pressable key={index} onPress={() => Linking.openURL(item.url)}>
            <Image source={item.icon} style={styles.icon} />
          </Pressable>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: "100%",
    height: 264,
    justifyContent: "flex-end", // position icons at the bottom
    padding: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#fff", // optional: applies a white overlay
  },
});
