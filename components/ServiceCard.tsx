import { Image, Pressable, StyleSheet, Text } from "react-native";

type ServiceCardProps = {
  image: any;
  title: string;
  onPress?: () => void;
};

export default function ServiceCard({
  image,
  title,
  onPress,
}: ServiceCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Image
        source={require("@/assets/icons/arrow-up-right.png")}
        style={styles.arrow}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444", // <-- Gray border here!
    backgroundColor: "#232323",
    marginBottom: 12,
  },
  cardImage: {
    width: 80,
    height: 64,
    borderRadius: 6,
    marginRight: 12,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
