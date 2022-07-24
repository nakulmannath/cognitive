import React from "react";
import { View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";
import { variables } from "../../theme";

import { Data } from "../../pages/home";


interface Props {
  data: Data;
}

const CardCountry: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.contentCard}>
      <View style={styles.inline}>
        <View>
          <Text style={styles.tem}>
            {data.capital}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardCountry;
