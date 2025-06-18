import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Garage() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo and Avatar */}
        <View style={styles.topRow}>
          <Image
            source={require("@/assets/images/gothamlogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Ionicons name="person-circle" size={28} color="#fff" />
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcome}>Welcome back, John!</Text>

        {/* Promo Card */}
        <Image
          source={require("@/assets/images/background-car.png")}
          style={styles.promo}
          resizeMode="cover"
        />

        {/* Garage Vehicle Card */}
        <View style={styles.vehicleCard}>
          <Image
            source={require("@/assets/images/background-car.png")}
            style={styles.vehicleThumb}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.vehicleTitle}>Mclaren 720S</Text>
            <Text style={styles.noService}>No Service Yet</Text>
          </View>
          <Pressable style={styles.serviceBtn}>
            <Text style={styles.serviceBtnText}>Book a Service</Text>
          </Pressable>
        </View>

        {/* Add Vehicle Link */}
        <Pressable style={styles.addVehicle}>
          <Text style={styles.addVehicleText}>Add Vehicle</Text>
        </Pressable>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our services</Text>
          <View style={styles.serviceRow}>
            <Image
              source={require("@/assets/images/background-car.png")}
              style={styles.serviceCard}
            />
            <Image
              source={require("@/assets/images/background-car.png")}
              style={styles.serviceCard}
            />
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reach Out Anytime</Text>
          <Text style={styles.contactText}>
            Address: 9 South Street Danbury CT 06810
          </Text>
          <Text style={styles.contactText}>
            Phone: 203.885.0107 or 203.648.0116
          </Text>
          <Text style={styles.contactText}>
            Email: gothamautoworks@gmail.com
          </Text>
          <Text style={styles.contactText}>Mon - Fri: 8:00 am – 6:00 pm</Text>
          <Text style={styles.contactText}>Saturday: 8:00 am – 3:00 pm</Text>
          <Text style={styles.contactText}>Sunday: Appointment only</Text>
        </View>

        {/* Footer Image */}
        <Image
          source={require("@/assets/images/background-car.png")}
          style={styles.footerImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: {
    padding: 24,
    backgroundColor: "#000",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 24,
    width: 120,
  },
  welcome: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    marginTop: 16,
    marginBottom: 8,
  },
  promo: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 16,
  },
  vehicleCard: {
    backgroundColor: "#111",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
  },
  vehicleThumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  noService: {
    fontSize: 12,
    color: "#888",
  },
  serviceBtn: {
    marginLeft: "auto",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  serviceBtnText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  addVehicle: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  addVehicleText: {
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "48%",
    height: 100,
    borderRadius: 8,
  },
  contactText: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
  footerImage: {
    width: "100%",
    height: 140,
    marginTop: 12,
    borderRadius: 8,
  },
});
