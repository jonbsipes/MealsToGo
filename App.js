import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Text>search</Text>
        </View>
        <View style={styles.listbox}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchbar: {
    backgroundColor: "green",
    padding: 16,
  },
  listbox: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
