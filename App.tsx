import "react-native-gesture-handler";
import "./src/utils/i16n/i18n";
import { Navigation } from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
