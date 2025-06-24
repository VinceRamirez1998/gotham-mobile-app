import ServiceCard from "@/components/ServiceCard";
import { db } from "@/firebaseConfig"; // update path if needed
import { collection, getDocs, orderBy, query } from "firebase/firestore";
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

export default function ServicesScreen() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      // NOTE: orderBy("order") ensures consistent ordering
      const q = query(collection(db, "services"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const data: Service[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Service);
      });
      setServices(data);
      setLoading(false);
    }
    fetchServices();
  }, []);

  // Group by category, but preserve order within group
  const grouped = services.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Service[]>);

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

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={styles.title}>Available Services</Text>
      {Object.entries(grouped).map(([category, items]) => (
        <View key={category}>
          <Text style={styles.section}>{category}</Text>
          {items.map((service) => (
            <ServiceCard
              key={service.id}
              image={{ uri: service.imageUrl }}
              title={service.title}
              onPress={() => {}}
            />
          ))}
        </View>
      ))}
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
