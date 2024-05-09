import { styles } from "./styles";
import { Pressable, PressableProps, Text } from "react-native";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
  
      <Text style={styles.title}>Revista PI</Text>
    </Pressable>
  );
}
