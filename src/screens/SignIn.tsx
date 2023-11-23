import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";
import { TranslationProps, useTranslation } from "react-i18next";

const SignIn = memo(() => {
  const { navigate } = useNavigation<RootStackParamList>();
  const { t }: TranslationProps = useTranslation("auth");
  return (
    <View style={styles.container}>
      <Text>{t("sigIn")}</Text>
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

export default SignIn;
