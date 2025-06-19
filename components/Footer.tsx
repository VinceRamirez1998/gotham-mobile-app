import { usePathname, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname(); // gives you the current route like "/garage"

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

  const tabs = [
    {
      label: "Garage",
      route: "/garage",
      icon: require("@/assets/icons/garage.png"),
      iconActive: require("@/assets/icons/garage-active.png"),
    },
    {
      label: "Feed",
      route: "/feed",
      icon: require("@/assets/icons/feed.png"),
      iconActive: require("@/assets/icons/feed-active.png"),
    },
    {
      label: "Services",
      route: "/services",
      icon: require("@/assets/icons/calendar.png"),
      iconActive: require("@/assets/icons/calendar-active.png"),
    },
    {
      label: "Profile",
      route: "/profile",
      icon: require("@/assets/icons/profile.png"),
      iconActive: require("@/assets/icons/profile-active.png"),
    },
  ] as const;

  return (
    <View style={styles.wrapper}>
      {/* Footer background with social links */}
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

      {/* Bottom Tab Navigation */}
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.route;
          return (
            <Pressable
              key={index}
              style={styles.tabItem}
              onPress={() => router.push(tab.route)}
            >
              <Image
                source={isActive ? tab.iconActive : tab.icon}
                style={styles.tabIcon}
              />
              <Text
                style={[styles.tabLabel, { color: isActive ? "#fff" : "#aaa" }]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#000",
  },
  footerImage: {
    width: "100%",
    aspectRatio: 375 / 264,
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
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    tintColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1a1a1a",
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  tabItem: {
    alignItems: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "400",
  },
});
