import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from '@react-navigation/native';

export interface ICountryData {
    capital: string;
    population: number;
    latlng: Array<number>;
    flag: string;
  }

export type Typeflags = {flags: {svg: string; png: string}}

export type AppStackNavigatorParamList = {
    Home: undefined;
    Details: {countryData: ICountryData};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    AppStackNavigatorParamList,
    "Details"
>;

export type DetailsScreenRouteProp = RouteProp<
AppStackNavigatorParamList,
  'Details'
>;