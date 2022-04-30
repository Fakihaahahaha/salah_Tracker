import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PrayerTitle from "../components/PrayerTitle";
import AppButton from "../components/AppButton";
import Report from "./Report";

const Stack = createStackNavigator();

function Home({ navigation }) {

  const [visible, setVisible] = useState(false);
  const [date, setdate] = useState(new Date());
  const [text, settext] = useState(
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
  const [fajar, setFajar] = useState();
  const [zuhar, setzuhar] = useState();
  const [asar, setasar] = useState();
  const [maghrib, setmaghrib] = useState();
  const [isha, setisha] = useState();

  const onChange = (event, selectedDate) => {
    setVisible(false);
    const currentDate = selectedDate || date;
    setdate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getDate();

    settext(fDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salah Tracker</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={(val) => setVisible(val)}
      >
        <Text style={styles.btnText}>Show Date Picker</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{text}</Text>
      {visible && (
        <DateTimePicker
          value={date}
          maximumDate={new Date()}
          minimumDate={new Date(2018, 1, 1)}
          onChange={onChange}
        />
      )}
      <View style={styles.prayersContainer}>
        <View style={styles.prayer}>
          <PrayerTitle>Fajar</PrayerTitle>
          <RadioButtonGroup
            selected={fajar}
            onSelected={(value) => setFajar(value)}
            containerStyle={{ flexDirection: "row" }}
            radioStyle={{ backgroundColor: "white" }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="offered"
              label="Offered"
              style={{ margin: 10 }}
            />
            <RadioButtonItem
              value="not offered"
              label="not offered"
              style={{ margin: 10 }}
            />
          </RadioButtonGroup>
        </View>
        <View style={styles.prayer}>
          <PrayerTitle>Zuhar</PrayerTitle>
          <RadioButtonGroup
            selected={zuhar}
            onSelected={(value) => setzuhar(value)}
            containerStyle={{ flexDirection: "row" }}
            radioStyle={{ backgroundColor: "white" }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="offered"
              label="Offered"
              style={{ margin: 10 }}
            />
            <RadioButtonItem
              value="notOffered"
              label="not offered"
              style={{ margin: 10 }}
            />
          </RadioButtonGroup>
        </View>
        <View style={styles.prayer}>
          <PrayerTitle>Asar</PrayerTitle>
          <RadioButtonGroup
            selected={asar}
            onSelected={(value) => setasar(value)}
            containerStyle={{ flexDirection: "row" }}
            radioStyle={{ backgroundColor: "white" }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="offered"
              label="Offered"
              style={{ margin: 10 }}
            />
            <RadioButtonItem
              value="notOffered"
              label="not offered"
              style={{ margin: 10 }}
            />
          </RadioButtonGroup>
        </View>
        <View style={styles.prayer}>
          <PrayerTitle>Maghrib</PrayerTitle>
          <RadioButtonGroup
            selected={maghrib}
            onSelected={(value) => setmaghrib(value)}
            containerStyle={{ flexDirection: "row" }}
            radioStyle={{ backgroundColor: "white" }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="offered"
              label="Offered"
              style={{ margin: 10 }}
            />
            <RadioButtonItem
              value="notOffered"
              label="not offered"
              style={{ margin: 10 }}
            />
          </RadioButtonGroup>
        </View>
        <View style={styles.prayer}>
          <PrayerTitle>Isha</PrayerTitle>
          <RadioButtonGroup
            selected={isha}
            onSelected={(value) => setisha(value)}
            containerStyle={{ flexDirection: "row" }}
            radioStyle={{ backgroundColor: "white" }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="offered"
              label="Offered"
              style={{ margin: 10 }}
            />
            <RadioButtonItem
              value="notOffered"
              label="not offered"
              style={{ margin: 10 }}
            />
          </RadioButtonGroup>
        </View>
      </View>
      <View style={styles.recordContainer}>
        <Text style={styles.recordTitle}>Previous Records</Text>
        <View style={styles.recordItems}>
          <AppButton onPress={() => navigation.navigate("Weekly")}>
            Weekly
          </AppButton>
          <AppButton onPress={() => navigation.navigate("Monthly")}>
            Monthly
          </AppButton>
          <AppButton onPress={() => navigation.navigate("Custom")}>
            Custom
          </AppButton>
        </View>
      </View>
    </View>
  );
}

function Weekly() {
  return (
    <Report
      title="Weekly Report"
      data={[42, 35, 49, 10, 37]}
      labels={["Fajar", "Zuhar", "Asar", "Maghrib", "Isha"]}
    ></Report>
  );
}

function Monthly() {
  return (
    <Report
      title="Monthly Report"
      data={[140, 500, 300, 490, 350]}
      labels={["Fajar", "Zuhar", "Asar", "Maghrib", "Isha"]}
    ></Report>
  );
}

function Custom() {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <Report
        title="Custom Report"
        data={[100, 500, 300, 490, 350]}
        labels={["Fajar", "Zuhar", "Asar", "Maghrib", "Isha"]}
      >
      </Report>
{/* view removed */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <AppButton onPress={(val) => setvisible(val)}>From Date</AppButton>
          <AppButton onPress={(val) => setvisible(val)}>To Date</AppButton>
        </View>
        {visible && (
          <DateTimePicker
            value={new Date()}
            maximumDate={new Date()}
            minimumDate={new Date(2018, 1, 1)}
            onChange={() => setvisible(false)}
          />
        )}
    </>
  );
}

export default function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="Custom" component={Custom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1a6f7",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25e84c",
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  prayersContainer: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#9dd1d4",
  },
  prayer: {
    flexDirection: "row",
    alignItems: "center",
  },
  recordTitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  recordContainer: {
    position: "absolute",
    bottom: 10,
  },
  recordItems: {
    marginTop: 20,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
