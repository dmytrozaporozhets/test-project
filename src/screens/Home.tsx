import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Routes from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

const Home = memo(() => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Go back to sign in screen" onPress={() => goBack()} />
    </View>
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

Home.displayName = Routes.HOME;

export default Home;
