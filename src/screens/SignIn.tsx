import { memo } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/ParamsList";
import { TranslationProps, useTranslation } from "react-i18next";
import {
  Button,
  ScreenView,
  FormInput,
  IconButton,
  SocialAuthorization,
} from "../components";
import { schemaType } from "../contants/enum";
import { useForm } from "react-hook-form";
import validationSchema from "../utils/validation/rules";
import { Routes } from "../navigation/Routes";
import { Colors } from "../theme/Colors";
import { icons } from "../contants/icons";

const SignInStyle = {
  logo: { marginVertical: 60, alignSelf: "center" },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.secondary[500],
  },
  noAcc: { fontSize: 16, marginRight: 5 },
};

const SignIn = memo(() => {
  const { navigate } = useNavigation<RootStackParamList>();
  const { t }: TranslationProps = useTranslation("auth");

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const signIn = () => {
    navigate(Routes.HOME);
    reset();
  };

  const onSignUp = () => console.log("sign up");
  const onSignInFacebook = () => console.log("sign facebook");
  const onSignInGoogle = () => console.log("sign google");
  const onSignInTwitter = () => console.log("sign twitter");
  const onSignInGitHub = () => console.log("sign github");

  return (
    <ScreenView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <IconButton
            icon={icons.userSolid}
            color={Colors.primary[500]}
            size={60}
            style={SignInStyle.logo}
            onPress={() => reset()}
          />
          <View>
            <FormInput
              label="Email"
              name="email"
              control={control}
              rules={validationSchema.email}
              error={errors?.email?.message}
              type={schemaType.LIGHT}
            />
            <FormInput
              label="Password"
              name="password"
              control={control}
              rules={validationSchema.password}
              error={errors?.password?.message}
              type={schemaType.LIGHT}
              style={{ marginTop: 10 }}
            />
            <Button
              title={t("sigIn")}
              onPress={handleSubmit(signIn)}
              style={{ marginTop: 10, alignSelf: "flex-end" }}
            />
          </View>
          <SocialAuthorization
            onSignInFacebook={onSignInFacebook}
            onSignInGoogle={onSignInGoogle}
            onSignInTwitter={onSignInTwitter}
            onSignInGitHub={onSignInGitHub}
          />
          <View style={SignInStyle.section}>
            <Text style={SignInStyle.noAcc}>{t("auth:noAccount")}</Text>
            <Text style={SignInStyle.text} onPress={onSignUp}>
              {t("auth:sigUp")}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenView>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

export default SignIn;
