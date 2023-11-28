import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";
import { TranslationProps, useTranslation } from "react-i18next";
import { Button, IconButton } from "../components";
import { contentSize } from "../contants/enum";
import { icons } from "../contants/icons";

const SignIn = memo(() => {
  const { navigate } = useNavigation<RootStackParamList>();
  const { t }: TranslationProps = useTranslation("auth");
  return (
    <View style={styles.container}>
      <Text>{t("sigIn")}</Text>
      <IconButton icon={icons.userSolid} iconStyle={{ marginVertical: 10 }} />
      <Button
        title="Go to Home"
        onPress={() => navigate(Routes.HOME)}
        size={contentSize.XS}
        style={{ marginTop: 10 }}
      />
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
