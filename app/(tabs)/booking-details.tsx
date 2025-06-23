import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VehicleDetailScreen() {
  const [tab, setTab] = useState<"details" | "log">("details");

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/(tabs)")}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>McLaren 720S</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Car Image */}
        <Image
          source={require("@/assets/images/mclaren.png")}
          style={styles.carImage}
          resizeMode="cover"
        />

        {/* Tabs */}
        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, tab === "details" && styles.activeTab]}
            onPress={() => setTab("details")}
          >
            <Text
              style={tab === "details" ? styles.activeTabText : styles.tabText}
            >
              Details
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, tab === "log" && styles.activeTab]}
            onPress={() => setTab("log")}
          >
            <Text style={tab === "log" ? styles.activeTabText : styles.tabText}>
              Service Log
            </Text>
          </Pressable>
        </View>

        {/* Conditional Content */}
        {tab === "details" ? (
          <>
            {/* Vehicle Details Section */}
            <View style={styles.detailsHeader}>
              <Text style={styles.sectionTitle}>Vehicle Details</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => router.push("/booking-vehicle-edit")}
              >
                <Text style={styles.editText}>Edit</Text>
                <Image
                  source={require("@/assets/icons/edit-icon.png")}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
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

            {/* Red Car Banner */}
            <Image
              source={require("@/assets/images/maintenance-plan.png")}
              style={styles.banner}
              resizeMode="cover"
            />
          </>
        ) : (
          <View style={styles.serviceCard}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image
                source={require("@/assets/images/mclaren.png")}
                style={{ width: 60, height: 60, borderRadius: 4 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.logRow}>
                  <Text style={styles.logLabel}>Date:</Text> June 13, 2025
                </Text>
                <Text style={styles.logRow}>
                  <Text style={styles.logLabel}>Time:</Text> 10:00 AM
                </Text>
                <Text style={styles.logRow}>
                  <Text style={styles.logLabel}>Service:</Text> Window Tinting –
                  Classic Black
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Book a Service</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
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
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "#aaa",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  editText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    paddingRight: 4,
  },
  editIcon: {
    width: 16,
    height: 16,
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
    fontWeight: "400",
  },
  banner: {
    width: "100%",
    height: 171,
    borderRadius: 8,
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  logRow: {
    color: "#ccc",
    fontSize: 13,
    marginBottom: 4,
  },
  logLabel: {
    color: "#fff",
    fontWeight: "500",
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
});
