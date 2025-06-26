import { db } from "@/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CARD_HEIGHT = 161;
const IMAGE_WIDTH = 189;

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [service, setService] = useState<any>(null);
  const [showLoader, setShowLoader] = useState(true);

  // Loader with logo for at least 2 seconds
  useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);

  // Firestore data
  useEffect(() => {
    async function fetchService() {
      if (!id) return;
      setService(null);
      const docRef = doc(db, "serviceDetails", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setService(docSnap.data());
      }
    }
    fetchService();
  }, [id]);

  // Loader shown while loading or before 2s is up
  if (showLoader || !service) {
    return (
      <View style={styles.logoLoader}>
        <View style={styles.verticalCenter}>
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ marginBottom: 2 }}
          />
          <Image
            source={require("@/assets/images/gothamlogo.png")}
            style={styles.logoImg}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "bottom", "left", "right"]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/services")}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
          {service.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Top Image (edge-to-edge) */}
        {service.topImage && (
          <Image
            source={{ uri: service.topImage }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {/* All content with side padding */}
        <View style={styles.body}>
          {/* Title & Description */}
          <Text style={styles.title}>{service.title}</Text>
          {service.description && (
            <Text style={styles.desc}>{service.description}</Text>
          )}
          {service.details && (
            <Text style={styles.desc}>{service.details}</Text>
          )}

          {/* Features / Bullets */}
          {service.features && (
            <View style={{ marginBottom: 18 }}>
              {service.features.map((item: string, idx: number) => (
                <View key={idx} style={styles.featureRow}>
                  <Image
                    source={require("@/assets/icons/bullet-icon.png")}
                    style={styles.bulletIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.featureText}>{item}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Coverage Options */}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#191919",
  },
  logoLoader: {
    flex: 1,
    backgroundColor: "#191919",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: 130,
    height: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 20 : 10,
    marginBottom: 24,
    backgroundColor: "#191919",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    flexShrink: 1,
    fontFamily: "Inter",
  },
  image: {
    width: "100%",
    height: 217,
    borderRadius: 0,
    marginBottom: 16,
    alignSelf: "center",
    backgroundColor: "#222",
  },
  body: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 6,
    fontFamily: "Raleway",
  },
  desc: {
    color: "#bbb",
    fontSize: 12,
    marginBottom: 12,
    fontWeight: "400",
    fontFamily: "Inter",
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  featureText: {
    color: "#bbb",
    fontSize: 14,
  },
  sectionHeader: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  coverageCardAbs: {
    backgroundColor: "#232323",
    borderRadius: 0,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    overflow: "hidden",
    minHeight: CARD_HEIGHT,
    width: "100%",
    position: "relative",
  },
  coverageTextWrap: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: IMAGE_WIDTH + 18,
    paddingBottom: 18,
    zIndex: 2,
    width: "100%",
  },
  coverageTitle: {
    color: "#fff",
    fontWeight: "500",
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
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: "#3c3c3c",
    borderRadius: 0,
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
    borderRadius: 7,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: "#191919",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Raleway",
  },
  bulletIcon: {
    width: 17,
    height: 17,
    marginRight: 7,
  },
});
