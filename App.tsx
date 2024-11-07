import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { CardComponent } from "./src/components/CardComponent";
import { CarCardComponent } from "./src/components/CarCardComponent";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <CardComponent />
        <CarCardComponent />
      </ScrollView>
    </>
  );
}
