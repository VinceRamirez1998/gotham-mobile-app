import ServiceCard from "@/components/ServiceCard";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function ServicesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={styles.title}>Available Services</Text>
      <Text style={styles.section}>WINDOW TINTING</Text>
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Classic Black"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Ceramic Carbon"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Ceramic Nano Black"
        onPress={() => {}}
      />
      <Text style={styles.section}>CERAMIC COATING</Text>
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Max Package"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Diamond Package"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Pro Package"
        onPress={() => {}}
      />
      <Text style={styles.section}>DETAILING AND PAINT CORRECTION</Text>
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Exterior Detailing"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Interior Detailing"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Full Detail Package"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="New Car Prep Package"
        onPress={() => {}}
      />
      <Text style={styles.section}>OTHER SERVICES</Text>
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Clear Bra (PPF Film)"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Under Carriage Coating"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Vinyl Wrapping"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Wheel /Rim Repair"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Caliper Painting"
        onPress={() => {}}
      />
      <ServiceCard
        image={require("@/assets/images/ceramic-carbon.png")}
        title="Armor Sheet Bed Liner"
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    paddingHorizontal: 16,
    paddingTop: 54,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 24,
  },
  section: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 8,
    marginTop: 16,
    letterSpacing: 1.2,
  },
});
