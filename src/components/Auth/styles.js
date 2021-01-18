import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        marginTop: '30%',
        paddingHorizontal: '10%'
    },
    logo: {
      width: 130,
      height: 130,
      marginBottom: 12,
    },
    contentCenter: {
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    helpText: {
          color: 'grey',
          marginTop: 5
    },
    error: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorIcon: {
        height: 15,
        width: 15
    },
    errorText: {
        color: 'red',
        marginTop: 5
    },
    inputGroup: {
        marginTop: '20%',
        flexDirection: 'row'
    },
    inputIconRight: {
        padding: 10,
        position: 'absolute',
        right: 0,
        zIndex: 9
    },
    inputIconLeft: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
    },
    input: {
        borderWidth: 3,
        width: '100%',
        borderRadius: 7,
    },
    invalid: {
        borderColor: 'red'
    },
    valid: {
        borderColor: '#9DE6E5',
    },
    inputValidColor: {
        // color: '#D1D1D1'
    },
    inputInvalidColor: {
        color: 'red'
    }
  });

export default styles;