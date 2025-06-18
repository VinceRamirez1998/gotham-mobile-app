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
          source={require("@/assets/images/promotional-banner.png")}
          style={styles.promo}
          resizeMode="cover"
        />

        {/* Garage Vehicle Card */}
        <View style={styles.vehicleCard}>
          {/* Top-right icon */}
          <Image
            source={require("@/assets/icons/arrow-up-right.png")}
            style={styles.arrowIcon}
          />

          {/* Circular vehicle image */}
          <Image
            source={require("@/assets/images/background-car.png")}
            style={styles.vehicleThumb}
          />

          {/* Vehicle name and service text under image */}
          <Text style={styles.vehicleTitle}>Mclaren 720S</Text>
          <Text style={styles.vehicleSubtext}>No Service Yet</Text>

          {/* Book a Service button */}
          <Pressable style={styles.bookFullButton}>
            <Text style={styles.bookFullButtonText}>Book a Service</Text>
          </Pressable>
        </View>

        {/* Add Vehicle Link */}
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
                Elevate your vehicle’s finish with cutting-edge ceramic coating
                solution.
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reach Out Anytime</Text>

          <View style={styles.contactGrid}>
            <View style={styles.contactLabels}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactLabel}>Business Hours</Text>
            </View>

            <View style={styles.contactValues}>
              <Text style={styles.contactValue}>
                9 South Street Danbury CT 06810
              </Text>
              <Text style={styles.contactValue}>
                203.885.0107 or 203.648.0116
              </Text>
              <Text style={styles.contactValue}>gothamautoworks@gmail.com</Text>
              <View>
                <Text style={styles.contactValue}>
                  Mon – Fri: 8:00 am – 6:00 pm
                </Text>
                <Text style={styles.contactValue}>
                  Saturday: 8:00 am – 3:00 pm
                </Text>
                <Text style={styles.contactValue}>
                  Sunday: Appointment only
                </Text>
              </View>
            </View>
          </View>
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

  //  VEHICLE CARD STYLES
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

  vehicleContentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
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

  cardTopRow: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 8,
  },

  //  SERVICES
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
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

  //  CONTACT INFO
  contactGrid: {
    flexDirection: "row",
    gap: 42,
    marginTop: 12,
  },

  contactLabels: {
    minWidth: 100,
  },

  contactLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  contactValues: {
    flex: 1,
  },

  contactValue: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "left", // important!
  },

  contactText: {
    color: "#ccc",
    fontSize: 13,
    lineHeight: 20,
  },

  //  FOOTER IMAGE
  footerImage: {
    width: "100%",
    height: 140,
    marginTop: 12,
    borderRadius: 8,
  },
});
