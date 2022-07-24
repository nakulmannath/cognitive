import { Image, View, Text } from "react-native";

const RowDataItem = ({ title, value, isFlag = false }: { title: string; value: string, isFlag: boolean }) => {
    return <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
      }}
    >
      <Text>{title}</Text>
      {!isFlag ? <Text>{value}</Text> :
        <Image style={{
          width: 60,
          height: 40,
        }} source={{ uri: value }} />
      }
    </View>
  }

  export default RowDataItem;