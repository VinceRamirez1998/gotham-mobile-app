import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

type ServiceOption = { label: string; value: string };

export default function BookServiceScreen() {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [openService, setOpenService] = useState(false);
  const [services, setServices] = useState<ServiceOption[]>([
    { label: "Window Tinting", value: "tinting" },
    { label: "Ceramic Coating", value: "coating" },
  ]);

  const [date, setDate] = useState<Date | null>(null);
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [note, setNote] = useState<string>("");

  const timeSlots = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
  ];

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["bottom", "top", "left", "right"]}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.headerTitle}>Book A Service</Text>
        </View>

        <Text style={styles.title}>
          Book A Service For Your{"\n"}McLaren 720s
        </Text>
        <Text style={styles.subtitle}>
          Choose the service type, date, and time that works best for you.
        </Text>

        <Text style={styles.label}>Service Type</Text>
        <View style={{ zIndex: 10 }}>
          <DropDownPicker
            open={openService}
            value={serviceType}
            items={services}
            setOpen={setOpenService}
            setValue={(cb) => setServiceType(cb(serviceType))}
            setItems={setServices}
            placeholder="Select a service"
            style={styles.dropdown}
            textStyle={{ color: "#fff" }}
            dropDownContainerStyle={{
              backgroundColor: "#111",
              borderColor: "#444",
            }}
            ArrowDownIconComponent={({ style }) => (
              <Ionicons
                name="chevron-down"
                size={20}
                color="#fff"
                style={style as any}
              />
            )}
          />
        </View>

        <Text style={styles.label}>Date</Text>
        <Pressable
          style={styles.dropdown}
          onPress={() => setShowDateModal(true)}
        >
          <View style={styles.row}>
            <Text style={{ color: date ? "#fff" : "#888" }}>
              {date ? date.toDateString() : "Select a date"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </View>
        </Pressable>

        {/* Date Modal */}
        <Modal
          transparent
          visible={showDateModal}
          animationType="slide"
          onRequestClose={() => setShowDateModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.handleBar} />
              <Text style={styles.modalTitle}>Select A Date</Text>
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="spinner"
                textColor="#fff"
                style={styles.datePicker}
                onChange={(event, selectedDate) => {
                  if (event.type === "dismissed") return;
                  if (selectedDate) {
                    setDate(selectedDate);
                  }
                }}
              />

              <Pressable
                style={styles.modalButton}
                onPress={() => setShowDateModal(false)}
              >
                <Text style={styles.modalButtonText}>Select Date</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Text style={styles.label}>Time</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((slot) => (
            <Pressable
              key={slot}
              style={[
                styles.timeSlot,
                selectedTime === slot && styles.timeSlotActive,
              ]}
              onPress={() => setSelectedTime(slot)}
            >
              <Text style={styles.timeText}>{slot}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Additional Notes (Optional)</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="e.g. Add any special instructions or requests for the technician"
          placeholderTextColor="#888"
          multiline
          value={note}
          onChangeText={setNote}
        />

        <Pressable style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Service</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: { flex: 1, paddingHorizontal: 24, paddingBottom: 32 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: Platform.OS === "ios" ? 12 : 0,
    marginBottom: 24,
  },
  headerTitle: { color: "#fff", fontSize: 16, fontWeight: "500" },
  title: { fontSize: 20, fontWeight: "600", color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#ccc", marginBottom: 24 },
  label: { color: "#fff", fontSize: 16, fontWeight: "400", marginBottom: 6 },
  dropdown: {
    backgroundColor: "#111",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  timeSlot: {
    width: "30%", // roughly 3 per row with margin
    marginBottom: 12,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#444",
    backgroundColor: "#111",
    alignItems: "center",
  },

  timeSlotActive: { borderColor: "#fff" },
  timeText: { color: "#fff", fontSize: 14 },
  notesInput: {
    backgroundColor: "#111",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 4,
    padding: 12,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 24,
  },
  bookButton: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
  },
  bookButtonText: { color: "#000", fontWeight: "600" },

  // Modal Styling
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContainer: {
    backgroundColor: "#1a1a1a",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 12,
  },
  datePicker: {
    backgroundColor: "#1a1a1a",
    width: "100%",
  },
  modalButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  handleBar: {
    width: 40,
    height: 5,
    backgroundColor: "#444",
    borderRadius: 100,
    marginBottom: 12,
  },
});
