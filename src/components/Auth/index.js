import React, { useState } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Input from '../../core/components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Auth = ({navigation, route}) => {

    const [mobileNumber, setMobileNumber] = useState();
    const [error, setError] = useState(null);
    
    const handleMobileNumber = (value) => {
        setMobileNumber(value);
        validate(value);
    }


    const validate = (number) => {
        var reg = new RegExp('^[0-9]+$');

        if (!number) {
            return false;
        }
        
        if (!reg.test(number)) {
            setError('Please enter a valid number');
            return false;
        }

        if (number.length < 10) {
            setError('Please enter 10 digit number');
            return false;
        }

        setError(null);
        return true;
    }

    const submit = (e) => {
        
        let valid = validate(mobileNumber);

        if (!valid) {
            return;
        }

        navigation.navigate('VerifyOtp');

    }

    return (
        <ScrollView>
            <KeyboardAvoidingView keyboardVerticalOffset={20} behavior="padding">
                    <View style={styles.container}>
                <View style={styles.contentCenter}>
                        <Image source={require('../../../assets/images/logo.png')}  style={styles.logo}/>
                </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputIconLeft}>
                            { error ? <Image source={require('../../../assets/images/phone-call-red.png')}/> : <Image source={require('../../../assets/images/phone-call.png')}/>}
                        </View>
                        <View style={styles.inputIconRight}>
                            <TouchableOpacity onPress={() => submit()}>
                                <Image source={require('../../../assets/images/right-arrow.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.input, error ? styles.invalid : styles.valid]}>
                            <View style={{width: '70%', flexDirection: 'row', justifyContent: 'center'}}>
                                <Input
                                    maxLength={10}
                                    keyboardType="numeric"
                                    onChangeText={text => handleMobileNumber(text)}
                                    placeholder="Enter mobile number"
                                    value={mobileNumber}
                                    style={error ? {color: 'red'} : {color: '#A9A9A9'}}
                                />
                            </View>
                        </View>
                        
                    </View>
                    { error && (
                        <View style={styles.error}>
                            <Image style={styles.errorIcon} source={require('../../../assets/images/warning.png')}/><Text style={styles.errorText}> {error}</Text>
                        </View>
                    )}
                    <View>
                        <Text style={styles.helpText}>Otp will send to this number</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Auth;
