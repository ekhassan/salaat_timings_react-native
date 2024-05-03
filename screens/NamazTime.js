import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NamazTime = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.masjidName}>
            <View style={styles.masjidCon}>
              <Text style={{ fontSize: 22, fontWeight: "bold",color:'black' }}>
                Jamia Masjid
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Wah Cantt
              </Text>
            </View>
            <View style={styles.masjidCon}>
              <Text style={{ fontSize: 14, fontWeight: "semibold" }}>
                12/04/2024 Monday
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "semibold" }}>
                28 , Shaban 1445 AH
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 20 }}
            >
              Current Namaz Time
            </Text>
          </View>
          <View>
            <View style={styles.namazTimecurrent}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Fajar</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 20 }}
            >
              Namaz Timming
            </Text>
          </View>
          <ScrollView>
            <View style={styles.namazTimeJumma}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" ,color:'white' }}>Jumma Prayer</Text>
              </View>
              <View>
                <Text style={{color:'white'}}>5:28</Text>
              </View>
            </View>
            <View style={styles.namazTime}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Fajar</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
            <View style={styles.namazTime}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Zuhar</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
            <View style={styles.namazTime}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Assar</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
            <View style={styles.namazTime}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Maghrib</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
            <View style={styles.namazTime}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Isha</Text>
              </View>
              <View>
                <Text>5:28</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NamazTime;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  masjidCon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  masjidName: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#85DBA4",
    marginTop: 10,
    borderRadius: 10,
  },
  namazTime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginVertical:5,
  },
  namazTimeJumma: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#00B140",
    borderRadius: 10,
  },
  namazTimecurrent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#E6B941",
    borderRadius: 10,
  },
});
