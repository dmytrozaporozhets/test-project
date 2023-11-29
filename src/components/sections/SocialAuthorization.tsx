import { memo } from "react";
import { TranslationProps, useTranslation } from "react-i18next";

import { Colors } from "../../theme/Colors";
import { IconButton } from "../buttons/IconButton";
import { Text, View } from "react-native";
import { icons } from "../../contants/icons";

interface SocialAuthorizationProps {
  onSignInGoogle?: () => void;
  onSignInTwitter?: () => void;
  onSignInFacebook?: () => void;
  onSignInGitHub?: () => void;
}

const SocialAuthorizationStyle = {
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.greyness[500],
  },
  textContainer: {
    backgroundColor: Colors.neutrals.white,
    position: "absolute",
    width: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.neutrals[600],
    textAlign: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderColor: Colors.primary[500],
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
};

export const SocialAuthorization = memo((props: SocialAuthorizationProps) => {
  const { onSignInFacebook, onSignInTwitter, onSignInGoogle, onSignInGitHub } =
    props;
  const { t }: TranslationProps = useTranslation("auth");
  return (
    <View>
      <View style={SocialAuthorizationStyle.wrapper}>
        <View style={SocialAuthorizationStyle.line} />
        <View style={SocialAuthorizationStyle.textContainer}>
          <Text style={SocialAuthorizationStyle.text}> {t("or")}</Text>
        </View>
      </View>
      <View style={SocialAuthorizationStyle.section}>
        <IconButton
          icon={icons.google}
          color={Colors.primary[500]}
          onPress={onSignInGoogle}
          style={[SocialAuthorizationStyle.button]}
        />
        <IconButton
          icon={icons.facebook}
          color={Colors.primary[500]}
          onPress={onSignInFacebook}
          style={[SocialAuthorizationStyle.button, { marginLeft: 15 }]}
        />
        <IconButton
          icon={icons.twitter}
          color={Colors.primary[500]}
          onPress={onSignInTwitter}
          style={[SocialAuthorizationStyle.button, { marginLeft: 15 }]}
        />
        <IconButton
          icon={icons.gitHub}
          color={Colors.primary[500]}
          onPress={onSignInGitHub}
          style={[SocialAuthorizationStyle.button, { marginLeft: 15 }]}
        />
      </View>
    </View>
  );
});
