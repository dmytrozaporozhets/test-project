import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";
import { useTranslation } from "react-i18next";
import { languageEnum } from "../contants/enum";

const languages = [
  { value: "English", reference: "en" },
  { value: "Українська", reference: "ua" },
];

const Settings = memo(() => {
  const { goBack } = useNavigation<RootStackParamList>();
  const { i18n } = useTranslation();

  const handleLanguage = (lng: object) => () =>
    i18n.changeLanguage(lng.reference);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Languages</Text>
        <Text style={{ marginVertical: 10 }}>
          active: {languageEnum[i18n.language.toUpperCase()]}
        </Text>
        {languages.map((lang) => (
          <Text
            onPress={handleLanguage(lang)}
            style={{ marginTop: 5 }}
            key={lang.reference}
          >
            {lang.value}
          </Text>
        ))}
      </View>
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

Settings.displayName = Routes.SETTINGS;

export default Settings;
