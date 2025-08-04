// app/(tabs)/FeedScreen.tsx

import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterNav from "../../components/FooterNav";

// Direct URLs from Firebase console
const BG_URL =
  "https://firebasestorage.googleapis.com/v0/b/gotham-auto-mobile-appli-8c257.firebasestorage.app/o/images%2Ffeed-bg.webp?alt=media&token=e9ce2cc8-f164-4bfc-a430-d5cd22809d92";
const ICON_URL =
  "https://firebasestorage.googleapis.com/v0/b/gotham-auto-mobile-appli-8c257.firebasestorage.app/o/images%2Ffeed-icon.webp?alt=media&token=e0525844-b106-40e6-bee5-822a6293d6e8";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Feed</Text>
      </View>

      {/* Background + Content */}
      <ImageBackground
        source={{ uri: BG_URL }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Image
            source={{ uri: ICON_URL }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Auto Feed Coming Soon</Text>
          <Text style={styles.subtitle}>
            Stay tuned—your personalized feed for tips, updates, and service
            alerts will be here soon.
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.footer}>
        <FooterNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  background: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
