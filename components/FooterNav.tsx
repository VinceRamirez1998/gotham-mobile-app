// components/FooterNav.tsx
import { usePathname, useRouter } from "expo-router";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/feed"

  const tabs = [
    {
      label: "Garage",
      route: "/(tabs)",
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
    <View style={styles.tabBar}>
      {tabs.map((tab, i) => {
        const isActive = pathname === tab.route;
        return (
          <Pressable
            key={i}
            style={styles.tabItem}
            onPress={() => router.push(tab.route)}
          >
            <Image
              source={isActive ? tab.iconActive : tab.icon}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: isActive ? "#fff" : "#aaa" },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 12,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "400",
  },
});
