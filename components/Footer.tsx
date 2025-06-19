import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

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
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.socialContainer}>
          {socials.map((item, index) => (
            <Pressable key={index} onPress={() => Linking.openURL(item.url)}>
              <Image source={item.icon} style={styles.icon} />
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: "100%",
    aspectRatio: 375 / 264, // use actual image ratio
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
  },
  icon: {
    width: screenWidth * 0.06, // responsive sizing
    height: screenWidth * 0.06,
    tintColor: "#fff",
  },
});
