import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEV MODE: Gotham Auto</Text>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/garage-setup")}
      >
        <Text style={styles.buttonText}>Go to Garage Setup</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/profile")}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/booking-service")}
      >
        <Text style={styles.buttonText}>Go to Booking</Text>
      </Pressable>
      {/* Add more routes as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: { color: "#fff", fontSize: 24, marginBottom: 32 },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 36,
    marginVertical: 8,
    borderRadius: 4,
  },
  buttonText: { color: "#111", fontWeight: "600" },
});
