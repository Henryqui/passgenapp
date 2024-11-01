import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Container geral
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Container apenas para o logo
    logoContainer: {
      flexDirection: 'column',
      borderColor: '#FFF',
      borderWidth: 2,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#4D4D4D'
    },
    inputContainer: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center'
    }
  });

  export default styles;


