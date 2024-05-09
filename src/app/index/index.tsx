import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/revista";
import { useState } from "react";
import Selected from "@/components/Selected";

export default function Index() {
  const [selected, setSelected] = useState<String[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }
    setSelected((state) => [...state, value]);
    console.log(selected);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Nâo", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha{"\n"}
        <Text style={styles.subtitle}>sua Revista</Text>
      </Text>

      <Text style={styles.message}>
        Todas as revista em um só lugar.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ingredients}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Revista PI"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onCLear={handleClearSelected}
          onSearch={() => {}}
        />
      )}
    </View>
  );
}
