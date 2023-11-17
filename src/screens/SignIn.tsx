import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Routes from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";

const SignIn = memo(() => {
  const { navigate } = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      <Text>SignIn screen</Text>
      <Button title="Go to Home screen" onPress={() => navigate(Routes.HOME)} />
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

SignIn.displayName = Routes.SIGN_IN;

export default SignIn;
