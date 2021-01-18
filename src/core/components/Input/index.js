import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

 const Input = React.forwardRef((props, ref) => (
        <TextInput ref={ref} {...props}/>
 ))

export default Input;
