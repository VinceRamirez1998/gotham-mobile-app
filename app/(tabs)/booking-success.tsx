import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BookingSuccessScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/booking-success.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/icons/success-calendar.png")}
            style={styles.icon}
          />

          <Text style={styles.title}>Service Booked!</Text>
          <Text style={styles.description}>
            Your{" "}
            <Text style={styles.highlight}>Window Tinting - Classic Black</Text>{" "}
            Service for the 2022 McLaren 720S has been successfully booked.
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Booking Details</Text>
            <Text style={styles.cardItem}>
              <Text style={styles.cardLabel}>Date: </Text>Thursday, June 13,
              2025
            </Text>
            <Text style={styles.cardItem}>
              <Text style={styles.cardLabel}>Time: </Text>10:00 AM
            </Text>
            <Text style={styles.cardItem}>
              <Text style={styles.cardLabel}>Service: </Text>Window Tinting -
              Classic Black
            </Text>
            <Text style={styles.cardNote}>
              Please arrive at least 15 minutes early to ensure a smooth
              check-in process.
            </Text>
          </View>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.primaryButtonText}>Back to my Garage</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Avail Maintenance Plan
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 200,
    lineHeight: 20,
  },
  highlight: {
    color: "#fff",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    padding: 16,
    width: "100%",
    marginBottom: 24,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: 12,
    fontSize: 16,
  },
  cardItem: {
    color: "#ccc",
    marginBottom: 8,
    fontSize: 14,
  },
  cardLabel: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 14,
  },
  cardNote: {
    color: "#999",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
  },
  secondaryButton: {
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
