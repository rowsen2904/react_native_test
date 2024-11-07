import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native";

export const CardComponent = () => {
  const username = "ded1fo";
  const fullname = "Max Korzh";
  const description = "Fullstack developer";
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.cardImage}
        />
        <Text>@{username}</Text>
        <Text style={{ fontWeight: "bold" }}>{fullname}</Text>
        <Text style={{ textAlign: "center" }}>{description}</Text>
        <Button title="Press me" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    borderRadius: 10,
    padding: 20,
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
});
