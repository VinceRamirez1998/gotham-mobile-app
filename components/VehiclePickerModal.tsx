// components/VehiclePickerModal.tsx

import { auth, db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export type Vehicle = {
  id: string;
  imageUrl: string;
  make: string;
  model: string;
  color?: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (vehicle: Vehicle) => void;
};

export default function VehiclePickerModal({
  visible,
  onClose,
  onSelect,
}: Props) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) return;
    (async () => {
      const uid = auth.currentUser?.uid ?? "testUser123";
      const snap = await getDocs(
        collection(db, "users", uid, "vehicles")
      );
      setVehicles(
        snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }))
      );
    })();
  }, [visible]);

  const handleContinue = () => {
    if (!selectedId) return;
    const vehicle = vehicles.find(v => v.id === selectedId)!;
    onSelect(vehicle);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.sheet}>
        <View style={styles.handle} />

        <Text style={styles.title}>Select A Vehicle To Continue</Text>
        <Text style={styles.subtitle}>
          Before booking this service, please select which vehicle from your garage it’s for.
        </Text>

        <FlatList
          data={vehicles}
          keyExtractor={v => v.id}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item }) => {
            const isSelected = item.id === selectedId;
            return (
              <TouchableOpacity
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => setSelectedId(item.id)}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.img} resizeMode="cover"/>
                <Text style={styles.name}>
                  {item.make} {item.model} {item.color || ""}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          style={[styles.contBtn, !selectedId && styles.contBtnDisabled]}
          disabled={!selectedId}
          onPress={handleContinue}
        >
          <Text style={styles.contText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" },
  sheet: {
    backgroundColor: "#191919",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "70%",
    paddingTop: 8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#444",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    paddingHorizontal: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#bbb",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232323",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
  },
  cardSelected: {
    borderWidth: 1,
    borderColor: "#fff",
  },
  img: {
    width: 118,
    height: 70,
    borderRadius: 4,
    marginRight: 12,
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  contBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 24,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 24,
  },
  contBtnDisabled: { opacity: 0.5 },
  contText: {
    color: "#191919",
    fontSize: 16,
    fontWeight: "500",
  },
});
