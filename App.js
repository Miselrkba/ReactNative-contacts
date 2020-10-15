import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import contacts from "./contacts";

export default class App extends React.Component {
  state = {
    showContacts: false,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts ? (
          <ScrollView>
            {contacts.map((contact) => (
              <View style={styles.row} key={contact.key}>
                <Text>{contact.name}</Text>
                <Text>{contact.phone}</Text>
              </View>
            ))}
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    padding: 20,
  },
});
