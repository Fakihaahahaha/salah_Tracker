import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph";

export default function Report({ data, labels, title }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.title}>{title}</Text>
      <HorizontalBarGraph
        data={data}
        labels={labels}
        width={Dimensions.get("screen").width}
        height={400}
        barColor="pink"
        style={styles.chartStyle}
        baseConfig={{
          hasYAxisBackgroundLines: false,
          xAxisLabelStyle: {
            rotation: 0,
            fontSize: 12,
            width: 70,
            yOffset: 4,
            xOffset: -15,
          },
          yAxisLabelStyle: {
            fontSize: 13,
            prefix: "",
            position: "bottom",
            // xOffset: 15,
            height: 100,
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#a83299",
  },
  chartStyle: {
    // backgroundColor: "#a5b6b8",
  },
});
