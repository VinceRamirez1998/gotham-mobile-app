// components/ContactSection.tsx
import { StyleSheet, Text, View } from "react-native";

export default function ContactSection() {
  return (
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
          <Text style={styles.contactValue}>203.885.0107 or 203.648.0116</Text>
          <Text style={styles.contactValue}>gothamautoworks@gmail.com</Text>
          <View>
            <Text style={styles.contactValue}>
              Mon – Fri: 8:00 am – 6:00 pm
            </Text>
            <Text style={styles.contactValue}>Saturday: 8:00 am – 3:00 pm</Text>
            <Text style={styles.contactValue}>Sunday: Appointment only</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
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
    textAlign: "left",
  },
});
