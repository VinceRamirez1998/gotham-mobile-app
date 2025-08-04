// app/services.tsx
import ServiceCard from "@/components/ServiceCard";
import { db } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import FooterNav from "../../components/FooterNav";

type Service = { id: string; title: string; imageUrl: string; category: string; order: number; };
const CATEGORY_ORDER = [
  "WINDOW TINTING",
  "CERAMIC COATING",
  "DETAILING AND PAINT CORRECTION",
  "OTHER SERVICES",
];

export default function ServicesScreen() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchServices() {
      const snap = await getDocs(collection(db, "services"));
      const data: Service[] = [];
      snap.forEach(doc => {
        const d = doc.data() as any;
        data.push({ id: doc.id, ...d, order: Number(d.order) });
      });
      setServices(data);
      setLoading(false);
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // group & sort
  const grouped: Record<string, Service[]> = {};
  services.forEach(s => {
    (grouped[s.category] ||= []).push(s);
  });
  CATEGORY_ORDER.forEach(cat => grouped[cat]?.sort((a, b) => a.order - b.order));

  return (
    <View style={styles.page}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}  // ← reserve space for footer
      >
        <Text style={styles.title}>Available Services</Text>
        {CATEGORY_ORDER.map(cat =>
          grouped[cat]?.length ? (
            <View key={cat}>
              <Text style={styles.section}>{cat}</Text>
              {grouped[cat].map(s => (
                <ServiceCard
                  key={s.id}
                  image={{ uri: s.imageUrl }}
                  title={s.title}
                  onPress={() => router.push(`/services/${s.id}`)}
                />
              ))}
            </View>
          ) : null
        )}
      </ScrollView>

      {/* sticky footer */}
      <View style={styles.footer}>
        <FooterNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#191919",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 54,
  },
  loader: {
    flex: 1,
    backgroundColor: "#191919",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 16,
    marginBottom: 8,
    letterSpacing: 1.2,
  },
  footer: {
    position: "absolute",
    bottom: 65,
    left: 0,
    right: 0,
  },
});
