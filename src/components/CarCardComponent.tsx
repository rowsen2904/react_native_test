import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const CarCardComponent = () => {
  const price = 3000000;
  const car = {
    name: "Bugatti Chiron",
    price: new Intl.NumberFormat("en-US").format(price),
    rating: 4.7,
    description: "Here some description about the car, which is very long",
    image: require("../../assets/car.jpg")
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText} numberOfLines={1}>
            ${car.price}
          </Text>
        </View>

        <Image style={styles.image} source={car.image} />

        <View style={styles.carNameContainer}>
          <Text style={styles.carNameText}>{car.name}</Text>
          <Text style={styles.carRatingText}>Rating: {car.rating}</Text>
        </View>

        <View style={styles.carDescriptionContainer}>
          <Text style={styles.carDescriptionText}>{car.description}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => console.log("pressed")}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  card: {},
  priceContainer: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  image: {
    width: "auto",
    height: 250,
    marginTop: 10,
    resizeMode: "cover",
  },
  carNameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
  },
  carNameText: {
    fontWeight: "bold",
    fontSize: 25,
    width: "70%",
  },
  carRatingText: {
    fontSize: 17,
  },
  carDescriptionText: {
    fontSize: 15,
  },
  carDescriptionContainer: {
    width: "70%",
    marginVertical: 15,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  }
});
