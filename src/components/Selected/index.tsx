import { View, Text } from "react-native";
import Animated, {
  BounceInDown,
  BounceOutDown,
  SlideInDown,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";

type Props = {
  quantity: number;
  onCLear: () => void;
  onSearch: () => void;
};

export default function Selected({ quantity, onCLear, onSearch }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} Revista selecionada</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onCLear}
          color={theme.colors.gray_400}
        />
      </View>
    </Animated.View>
  );
}
