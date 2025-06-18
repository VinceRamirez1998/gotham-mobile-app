import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GarageHeader from "@/components/GarageHeader";
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
      <ScrollView>
        {/* ⬇️ Wrapped all padded content inside a View */}
        <View style={styles.container}>
          {/* Header row */}
          <GarageHeader />

          <Text style={styles.welcome}>Welcome back, John!</Text>

          {/* Promo */}
          <Image
            source={require("@/assets/images/promotional-banner.png")}
            style={styles.promo}
            resizeMode="cover"
          />

          {/* Vehicle Card */}
          <View style={styles.vehicleCard}>
            <Image
              source={require("@/assets/icons/arrow-up-right.png")}
              style={styles.arrowIcon}
            />
            <Image
              source={require("@/assets/images/background-car.png")}
              style={styles.vehicleThumb}
            />
            <Text style={styles.vehicleTitle}>Mclaren 720S</Text>
            <Text style={styles.vehicleSubtext}>No Service Yet</Text>
            <Pressable style={styles.bookFullButton}>
              <Text style={styles.bookFullButtonText}>Book a Service</Text>
            </Pressable>
          </View>

          {/* Add Vehicle */}
          <Pressable style={styles.addVehicle}>
            <View style={styles.addVehicleContent}>
              <Text style={styles.addVehicleText}>Add Vehicle</Text>
              <Image
                source={require("@/assets/icons/add-icon.png")}
                style={styles.addVehicleIcon}
                resizeMode="contain"
              />
            </View>
          </Pressable>

          {/* Services Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Our services</Text>
              <Image
                source={require("@/assets/icons/arrow-right.png")}
                style={styles.sectionArrow}
              />
            </View>

            <View style={styles.serviceRow}>
              <View style={styles.serviceCard}>
                <Image
                  source={require("@/assets/images/background-car.png")}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>Window Tinting</Text>
                <Text style={styles.serviceDescription}>
                  Protect your interior and upgrade your ride with premium
                  tinting.
                </Text>
              </View>

              <View style={styles.serviceCard}>
                <Image
                  source={require("@/assets/images/background-car.png")}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>Ceramic Coating</Text>
                <Text style={styles.serviceDescription}>
                  Elevate your vehicle’s finish with cutting-edge ceramic
                  coating solution.
                </Text>
              </View>
            </View>
          </View>

          {/* Contact Section */}
          <ContactSection />
        </View>

        {/* Footer  */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    padding: 15,
    backgroundColor: "#000",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
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
    padding: 16,
    marginBottom: 12,
    position: "relative",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  arrowIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    height: 24,
    width: 24,
  },
  vehicleThumb: {
    width: 40,
    height: 40,
    borderRadius: 28,
    marginRight: 12,
    marginBottom: 32,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
  },
  vehicleSubtext: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 16,
  },
  bookFullButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    alignSelf: "stretch",
  },
  bookFullButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },

  addVehicle: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  addVehicleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addVehicleText: {
    color: "#fff",
    fontSize: 14,
  },
  addVehicleIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionArrow: {
    width: 22,
    height: 22,
    tintColor: "#fff",
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  serviceCard: {
    width: "48%",
  },
  serviceImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 10,
    color: "#ccc",
    lineHeight: 14,
  },
});
