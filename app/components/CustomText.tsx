// components/CustomText.tsx
import { Text, TextProps } from "react-native";

export default function CustomText(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Montserra" }, props.style]} />;
}
