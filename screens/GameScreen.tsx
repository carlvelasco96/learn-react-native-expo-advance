import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>GameScreen</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +- BUTTONS */}
      </View>
      <View>{/* LOGS ROUND */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
