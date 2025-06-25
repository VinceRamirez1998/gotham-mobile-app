import ServiceCard from "@/components/ServiceCard";
import { db } from "@/firebaseConfig"; // update path if needed
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Service = {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  order: number;
};

const CATEGORY_ORDER = [
  "WINDOW TINTING",
  "CERAMIC COATING",
  "DETAILING AND PAINT CORRECTION",
  "OTHER SERVICES",
];

export default function ServicesScreen() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const querySnapshot = await getDocs(collection(db, "services"));
      const data: Service[] = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        data.push({
          id: doc.id,
          ...docData,
          order:
            typeof docData.order === "number"
              ? docData.order
              : Number(docData.order),
        } as Service);
      });
      setServices(data);
      setLoading(false);
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#191919",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: "#fff", marginTop: 16 }}>Loading services…</Text>
      </View>
    );
  }

  // Group by category
  const grouped: Record<string, Service[]> = {};
  services.forEach((service) => {
    if (!grouped[service.category]) grouped[service.category] = [];
    grouped[service.category].push(service);
  });

  // Sort each group by order
  CATEGORY_ORDER.forEach((cat) => {
    if (grouped[cat]) {
      grouped[cat].sort((a, b) => a.order - b.order);
    }
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={styles.title}>Available Services</Text>
      {CATEGORY_ORDER.map((category) =>
        grouped[category] && grouped[category].length > 0 ? (
          <View key={category}>
            <Text style={styles.section}>{category}</Text>
            {grouped[category].map((service) => (
              <ServiceCard
                key={service.id}
                image={{ uri: service.imageUrl }}
                title={service.title}
                onPress={() => {}}
              />
            ))}
          </View>
        ) : null
      )}
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
