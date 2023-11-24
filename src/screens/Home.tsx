import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";
import { ScreenView } from "../components";

const Home = memo(() => {
  const { navigate, goBack } = useNavigation<RootStackParamList>();
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          title="Go to settings screen"
          onPress={() => navigate(Routes.SETTINGS)}
        />
        <Button title="Go back to sign in screen" onPress={() => goBack()} />
      </View>
    </ScreenView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
