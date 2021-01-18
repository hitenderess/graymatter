import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
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
    optSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '20%',
        borderWidth: 3,
        borderRadius: 7
    },
    subHeader: {
        fontSize: 15,
        marginBottom: '10%'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    resentInfoSection: {
        marginTop: 10,
        flexDirection: 'row',
        
    },
    verifyOtpSection: {
        marginTop: '20%',
        width: '50%',
        // padding: 30
    },
    primaryColor: {
       color: '#FF5042' 
    },
    screenHeader: {
        backgroundColor: '#00C3DC',
        padding: 30,
        marginTop: '10%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    secendoryText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    invalid: {
        borderColor: 'red'
    },
    valid: {
        borderColor: 'grey',
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
    btn: {
        backgroundColor: 'red', 
        padding: 16,
        borderRadius: 5,
        opacity: 0.4,
    },
    btnTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
  });

export default styles;