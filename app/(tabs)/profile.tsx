// app/(tabs)/profile.tsx

import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import FooterNav from "../../components/FooterNav";

const screenWidth = Dimensions.get("window").width;
const FOOTER_HEIGHT = 64;

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const personalInfo = [
    { label: "First Name",    value: "John" },
    { label: "Last Name",     value: "Smith" },
    { label: "Email",         value: "johnsmith@gmail.com" },
    { label: "Phone Number",  value: "(555) 123-4567" },
    { label: "Address",       value: "123 Main St, Brooklyn, NY 11201" },
  ];

  return (
    <SafeAreaView style={[styles.page, { paddingBottom: insets.bottom }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable onPress={() => router.back()} style={styles.headerButton}>
          {/* swap in whatever icon you like */}
          <Image
            source={require("@/assets/icons/arrow-up-right.png")}
            style={styles.headerIcon}
          />
        </Pressable>
      </View>

      {/* Main content */}
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: FOOTER_HEIGHT + insets.bottom + 16 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("@/assets/images/gothamlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Personal Information</Text>
            <Pressable
              onPress={() => router.push("/profile/edit")}
              style={styles.editButton}
            >
              <Text style={styles.editText}>Edit</Text>
              <Image
                source={require("@/assets/icons/edit-icon.png")}
                style={styles.editIcon}
              />
            </Pressable>
          </View>

          {personalInfo.map((f) => (
            <View key={f.label} style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>{f.label}</Text>
              <Text style={styles.fieldValue}>{f.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Sticky footer only on this page */}
      <View style={styles.footer}>
        <FooterNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#191919",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  headerButton: {
    padding: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  logo: {
    width: screenWidth * 0.8,
    height: 120,
    alignSelf: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontSize: 14,
    color: "#888",
    marginRight: 4,
  },
  editIcon: {
    width: 16,
    height: 16,
    tintColor: "#888",
  },
  fieldRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    color: "#aaa",
  },
  fieldValue: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
