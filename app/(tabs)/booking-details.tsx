import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingDetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/garage")}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>McLaren 720S</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Car Image */}
        <Image
          source={require("@/assets/images/mclaren-big.png")}
          style={styles.carImage}
          resizeMode="cover"
        />

        {/* Tabs */}
        <View style={styles.tabs}>
          <Text style={[styles.tab, styles.activeTab]}>Details</Text>
          <Text style={styles.tab}>Service Log</Text>
        </View>

        {/* Vehicle Details with Edit */}
        <View style={styles.vehicleDetailsHeader}>
          <Text style={styles.vehicleDetailsTitle}>Vehicle Details</Text>
          <Pressable style={styles.editButton} onPress={() => {}}>
            <Text style={styles.editText}>Edit</Text>
            <Image
              source={require("@/assets/icons/edit-icon.png")}
              style={styles.editIcon}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.label}>Vehicle Make</Text>
            <Text style={styles.value}>McLaren</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Model</Text>
            <Text style={styles.value}>720S</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Year</Text>
            <Text style={styles.value}>2022</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Color</Text>
            <Text style={styles.value}>Blue</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>License Plate</Text>
            <Text style={styles.value}>GTHM-720</Text>
          </View>
        </View>

        {/* Promotional Banner */}
        <View style={styles.bannerCard}>
          <Image
            source={require("@/assets/images/maintenance-plan.png")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Book Button */}
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Book a Service</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  carImage: {
    width: "100%",
    height: 217,
    borderRadius: 8,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    color: "#aaa",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  activeTab: {
    color: "#fff",
    fontWeight: "600",
    borderBottomColor: "#fff",
  },
  details: {
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    color: "#999",
    fontSize: 14,
  },
  value: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  promo: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  link: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 32 : 24,
    paddingTop: 8,
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
    fontWeight: "600",
  },

  vehicleDetailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  vehicleDetailsTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    color: "#ccc",
    fontSize: 14,
    fontWeight: "500",
    paddingRight: 8,
  },
  editIcon: {
    width: 14,
    height: 14,
  },
  bannerCard: {
    backgroundColor: "#111",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
});
