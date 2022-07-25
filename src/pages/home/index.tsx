import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { variables } from "../../theme";

import countryApi from "../../services/countryApi";
import { ICountryData, HomeScreenNavigationProp, Typeflags } from "../../navigrations/types";


const HomePage = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const [nameCountry, setNameCountry] = useState("");
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleCountry() {
    setLoading(true);
    return countryApi(nameCountry)
      .then(({ data }) => {
        // Transforming data
        const [countryData] = data as Array<ICountryData & Typeflags>;
        const prepareData: ICountryData = countryData && {
          capital: countryData?.capital ?? "",
          population: countryData?.population ?? 0,
          latlng: countryData?.latlng,
          flag: countryData.flags?.png ?? countryData.flag ?? "",
        };
        setLoading(false);
        //Set data
        navigate("Details", { countryData: prepareData })
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }


  useEffect(() => {
    if (nameCountry === "") {
      return setError(false);
    }
  }, [nameCountry]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          backgroundColor: variables.colors.gray100,
          width: 350,
          padding: 24,
        }}
      >
        <Text style={styles.headerTitle}>Weather Forecast</Text>
        {/* Input search */}
        <View style={{ display: "flex" }}>
          <TextInput
            placeholder="Country Name"
            autoCapitalize="words"
            style={styles.input}
            value={nameCountry}
            onChangeText={setNameCountry}
            onSubmitEditing={handleCountry}
          />

          <View style={{ marginTop: 16, alignSelf: "center" }}>
            <TouchableOpacity
              style={[
                styles.searchBtn,
                { backgroundColor: !nameCountry ? "#c8c8c8" : "#346beb" }
              ]}
              onPress={handleCountry}
              disabled={!nameCountry}
            >
              <Text>SEARCH</Text>

              {loading && (
                <ActivityIndicator
                  size="small"
                  style={{ paddingLeft: 8 }}
                  color={variables.colors.black500}
                />
              )
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
