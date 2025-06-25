import { db } from "@/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CARD_HEIGHT = 161;
const IMAGE_WIDTH = 189; // Try 150-170 for mobile. If your screen is wider, go higher.
const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH - 32; // Assuming 16px padding left/right on the page.

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    async function fetchService() {
      if (!id) return;
      const docRef = doc(db, "serviceDetails", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setService(docSnap.data());
      }
    }
    fetchService();
  }, [id]);

  if (!service) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: "#fff", marginTop: 16 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 36 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ paddingRight: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{service.title}</Text>
      </View>
      {/* Top Image */}
      {service.topImage && (
        <Image
          source={{ uri: service.topImage }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      {/* Title & Description */}
      <Text style={styles.title}>{service.title}</Text>
      {service.description && (
        <Text style={styles.desc}>{service.description}</Text>
      )}
      {service.details && <Text style={styles.desc}>{service.details}</Text>}

      {/* Features / Bullets */}
      {service.features && (
        <View style={{ marginBottom: 18 }}>
          {service.features.map((item: string, idx: number) => (
            <View key={idx} style={styles.featureRow}>
              <Ionicons
                name="checkmark-circle-outline"
                size={16}
                color="#aaa"
                style={{ marginRight: 7 }}
              />
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Coverage Cards for PPF/Clear Bra */}
      {service.coverageOptions && (
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.sectionHeader}>Coverage Options</Text>
          {service.coverageOptions.map((opt: any, idx: number) => (
            <View key={idx} style={styles.coverageCardAbs}>
              <View style={styles.coverageTextWrap}>
                <Text style={styles.coverageTitle}>{opt.title}</Text>
                <Text style={styles.coverageDesc}>{opt.desc}</Text>
              </View>
              <Image
                source={{ uri: opt.imageUrl }}
                style={styles.coverageImgAbs}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      )}

      {/* Price Table */}
      {service.priceOptions && (
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.sectionHeader}>Price</Text>
          {service.priceOptions.map((item: any, idx: number) => (
            <View key={idx} style={styles.priceBox}>
              <Text style={styles.priceLabel}>{item.label}</Text>
              <Text style={styles.priceValue}>{item.price}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Book Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  centered: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Inter",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 0,
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 6,
  },
  desc: {
    color: "#bbb",
    fontSize: 12,
    marginBottom: 12,
    fontWeight: "400",
    fontFamily: "Inter",
  },
  // ---- COVERAGE ABSOLUTE CARD STYLES ----
  coverageCardAbs: {
    backgroundColor: "#232323",
    borderRadius: 0,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    overflow: "hidden",
    minHeight: CARD_HEIGHT,
    width: "100%", // Ensure it fills parent
    position: "relative",
  },
  coverageTextWrap: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: IMAGE_WIDTH + 18, // 18 is a little gap between text and image
    paddingBottom: 18,
    zIndex: 2,
    width: "100%",
  },
  coverageTitle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 4,
  },
  coverageDesc: {
    color: "#bbb",
    fontSize: 12,
    flexWrap: "wrap",
    fontWeight: "400",
  },
  coverageImgAbs: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: IMAGE_WIDTH,
    height: CARD_HEIGHT,
    zIndex: 1,
    // Remove any margin/background
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  // ---- OTHER STYLES ----
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  featureText: {
    color: "#bbb",
    fontSize: 14,
  },
  sectionHeader: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: "#3c3c3c",
    borderRadius: 6,
    backgroundColor: "#232323",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  priceValue: {
    color: "#bbb",
    fontSize: 13,
  },
  button: {
    marginTop: 22,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: "#191919",
    fontWeight: "600",
    fontSize: 16,
  },
});
