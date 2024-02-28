import { StatusBar } from 'react-native';
import { Navigation } from "./src/infrastructure/navigation";
import {SafeAreaView} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}