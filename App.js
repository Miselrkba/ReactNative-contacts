import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Row from "./Row";

import Constants from "expo-constants";

import contacts, { compareNames } from "./contacts";

import ContactsList from "./ContactsList";

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
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
