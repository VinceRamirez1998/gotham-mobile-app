import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SuccessScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <View style={styles.container}>
        {/* Top Content */}
        <View style={styles.content}>
          <Ionicons
            name="checkmark-circle"
            size={72}
            color="#fff"
            style={styles.checkIcon}
          />
          <Text style={styles.title}>You're All Set!</Text>
          <Text style={styles.subtitle}>
            Your garage is ready. You can now manage your vehicles, book
            services, and stay on top of subscriptions—all in one place.
          </Text>
        </View>

        {/* Car Image */}
        <Image
          source={require("@/assets/images/mclaren.png")}
          style={styles.carImage}
        />

        {/* Bottom Button */}
        <View style={styles.footer}>
          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.buttonText}>Go to my Garage →</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  content: {
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 24,
  },
  checkIcon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: "Raleway",
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#ccc",
    textAlign: "center",
    lineHeight: 20,
  },
  carImage: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
    transform: [{ scale: 1.2 }],
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 32 : 24,
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "500",
  },
});
