import { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenViewProps {
  children: JSX.Element;
}

export const ScreenView = memo(({ children }: ScreenViewProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
});
