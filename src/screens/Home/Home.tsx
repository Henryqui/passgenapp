import React from "react";
import { Text, View, StyleSheet} from "react-native";

import styles from "./HomeStyles";

import { StatusBar } from 'expo-status-bar';
import { CpsLogo } from "../../components/CpsLogo/CpsLogo";
import { CpsButton } from '../../components/CpsButton/CpsButton';

export default function Home() {
    return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
      <CpsLogo/>
      </View>

      <View style={styles.inputContainer}>
        <CpsButton/>
      </View>
      
      <StatusBar style="light" />
    </View>
    );
}

