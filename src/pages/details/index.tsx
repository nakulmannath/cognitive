import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { variables } from "../../theme";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp, ICountryData } from "../../navigrations/types";
import { capitalize } from "../../utils/jsUtils";
import weatherApi from "../../services/weatherApi";
import RowDataItem from "../../components/Weather/RowItemData";

interface IWeatherData {
  temperature: number;
  wind_speed: number;
  weather_icons: Array<string>;
  precip: number;
}

type TKeyWeatherData = keyof IWeatherData;

type TKeyCountry = keyof ICountryData;


const DetailsPage = () => {
  const { params } = useRoute<DetailsScreenRouteProp>();
  const [weatherData, setWeatherData] = useState<Array<{ title: string; value: string; isFlag: boolean }> | null>(null);
  const { countryData } = params;

  // Process data of counter from previouse screen
  const processDataCountryData = useMemo(() => {
    const cData = [];
    for (let key in countryData) {
      const keyT = key as TKeyCountry;
      let value = countryData[keyT];
      let isFlag = false
      if (key === "latlng" && Array.isArray(value)) {
        value = value.join("/");
      } else if (key === "flag") {
        isFlag = true;
      }
      cData.push({ title: capitalize(key), value: value.toString() as string, isFlag })
    }
    return cData;
  }, [countryData])

  const handleGetData = async () => {
    if (!countryData?.capital) return;
    const { data } = await weatherApi(countryData?.capital);
    const { temperature, wind_speed, weather_icons, precip } = data?.current as IWeatherData;
    const wData = { temperature, wind_speed, weather_icons, precip };
    const cData = [];
    for (let key in wData) {
      const keyT = key as TKeyWeatherData;
      let value = typeof wData[keyT] === "number" ? wData[keyT].toString() : wData[keyT];
      let isFlag = false;
      if (keyT === "weather_icons" && Array.isArray(value)) {
        value = value[0] as string;
        isFlag = true;
      }
      cData.push({ title: capitalize(key), value: value.toString() as string, isFlag })
    }
    setWeatherData(cData);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          backgroundColor: variables.colors.gray100,
          width: Dimensions.get('window').width-30,
          padding: 24,

        }}
      >
        <View style={{ marginVertical: 16 }}>
          {
            processDataCountryData?.map((data, index) => <RowDataItem key={index} {...data} />)
          }
        </View>
        <View style={{ marginVertical: 16 }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#346beb",
              padding: 8
            }}
            onPress={handleGetData}
          >
            <Text>GET CAPITAL WEATHER</Text>
          </TouchableOpacity>
          <View>
            {
              weatherData?.map((data, index) => <RowDataItem key={index} {...data} />)
            }
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsPage;
