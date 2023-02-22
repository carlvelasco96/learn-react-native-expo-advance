import React, { ReactNode } from "react";
import { Text, View } from "react-native";

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
