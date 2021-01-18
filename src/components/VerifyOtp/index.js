import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Input from '../../core/components/Input';


const VerifyOtp = ({navigation}) => {

  const digOneRef = useRef();
  const digTwoRef = useRef();
  const digThreeRef = useRef();
  const digFourRef = useRef();

  const [digOne, setDigOne] = useState('');
  const [digTwo, setDigTwo] = useState('');
  const [digThree, setDigThree] = useState('');
  const [digFour, setDigFour] = useState('');


  const [validOtp, setValidOtp] = useState('1234');
  const [invalidOtp, setInvalidOtp] = useState('5678');
  const [enableSubmission, setEnableSubmission] = useState(false);

  const [error, setError] = useState(false);


  useEffect(() => {
        validate();
   }, [digOne, digTwo, digThree, digFour])

   const validate = () => {
    const otp = digOne+digTwo+digThree+digFour;

    setError(null);
    setEnableSubmission(false);

    if (otp.length < 4) {
        return;
    }

    setEnableSubmission(true);

    if (otp != validOtp) {
        setError(true);
    } 
   }

   const focusOn = (value, forwardRef, backwardRef) => {
        if (value.length == 0) {
            backwardRef.current.focus();
            return;
        }

        forwardRef.current.focus();
   }

    return (
        <ScrollView>
            <KeyboardAvoidingView keyboardVerticalOffset={20} behavior="padding">
                    <View style={styles.screenHeader}>
                        <Text style={styles.secendoryText}>Verify Phone Number</Text><Text style={styles.secendoryText}>X</Text>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.header}>Enter OTP Code</Text>
                        </View>
                        <View>
                            <Text style={styles.subHeader}>Please verify your number with OTP code send to ****456.</Text>
                        </View>
                        <View style={styles.optSection}>
                            <View style={[styles.input, error ? styles.invalid : styles.valid ]}>
                                <Input
                                    ref={digOneRef}
                                    textAlign={'center'}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    onChangeText={value => {
                                        setDigOne(value);
                                        focusOn(value, digTwoRef, digOneRef)
                                    }}
                                />
                            </View>
                            <View style={[styles.input, error ? styles.invalid : styles.valid ]}>
                                <Input 
                                    ref={digTwoRef}
                                    textAlign={'center'}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    onChangeText={value => {
                                        setDigTwo(value);
                                        focusOn(value, digThreeRef, digOneRef)
                                    }}
                                />
                            </View>
                            <View style={[styles.input, error ? styles.invalid : styles.valid ]}>
                                <Input
                                    ref={digThreeRef}
                                    textAlign={'center'}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    onChangeText={value => {
                                        setDigThree(value);
                                        focusOn(value, digFourRef, digTwoRef)
                                    }}
                                />
                            </View>
                            <View style={[styles.input, error ? styles.invalid : styles.valid ]}>
                                <Input
                                    ref={digFourRef}
                                    textAlign={'center'}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    onChangeText={value => {
                                        setDigFour(value);
                                        focusOn(value, digFourRef, digThreeRef)
                                    }}
                                />
                            </View>
                        </View>
                        { 
                          error && 
                            <View style={styles.error}>
                                <Image style={styles.errorIcon} source={require('../../../assets/images/warning.png')}/><Text style={styles.errorText}> Invalid OTP. please retry</Text>
                            </View>
                        }
                        <View style={styles.resentInfoSection}>
                            <Text>Didn't received code?</Text><Text style={styles.primaryColor}> Resend</Text>
                        </View>
                        <View style={styles.verifyOtpSection}>
                            <TouchableOpacity style={styles.btn}>
                                 <Text style={styles.btnTitle}>Verify OTP</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default VerifyOtp;
