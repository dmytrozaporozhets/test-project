import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = memo(() => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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

export default Profile;
