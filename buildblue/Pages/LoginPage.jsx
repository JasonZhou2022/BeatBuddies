import React from 'react';
import GlobalStyles from '../Components/GlobalStyles';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Box } from "@/Components/ui/box";
import { Heading } from "@/Components/ui/heading";
import { VStack } from "@/Components/ui/vstack";
import { HStack } from "@/Components/ui/hstack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    FormControlHelper,
    FormControlHelperText,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
 } from "@/Components/ui/form-control";
 import { 
    Input,
    InputField,
    InputSlot,
    InputIcon,
} from "@/Components/ui/input";
import {
    Button,
    ButtonText,
    ButtonSpinner,
    ButtonIcon,
    ButtonGroup,
  } from "@/Components/ui/button"


export default function LoginPage(){

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        if (!value) {
            setError(true);
        } else {
            setError(false);
            alert(`Submitted: ${value}`);
        }
    };

    return (
        <VStack style={[styles.structure, styles.debug, {alignItems: 'center'}]}>
            <Text style={[styles.heading, {alignSelf: 'center'}]}>Login</Text>
            <FormControl style={[, GlobalStyles.white]}>
                <FormControlLabel>
                    <FormControlLabelText style={[GlobalStyles.white, GlobalStyles.bold, {fontSize: 20}]}>Username:</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField placeholder={'Username...'} style={[GlobalStyles.white, styles.inputSettings, {paddingLeft: width * 0.02}]}/>
                </Input>
                <FormControlHelper>
                    <FormControlHelperText style={[GlobalStyles.white]}>Must be at least 6 characters long</FormControlHelperText>
                    <FormControlHelperText></FormControlHelperText>
                    <FormControlHelperText></FormControlHelperText>
                    {/* These are just for spacing lol^ */}
                </FormControlHelper>
                <FormControlError>
                    <FormControlErrorIcon />
                    <FormControlErrorText />
                </FormControlError>
                {/* ============================================================ */}
                <Box style={[styles.margin10]}></Box>
                <FormControlLabel>
                    <FormControlLabelText style={[GlobalStyles.white, GlobalStyles.bold, {fontSize: 20}]}>Password:</FormControlLabelText>
                </FormControlLabel>
                <Input secureTextEntry={showPassword}>
                    <InputField type='password' placeholder={'Password...'} style={[GlobalStyles.white, styles.inputSettings, {paddingLeft: width * 0.02}]}>
                        <InputSlot>
                            <InputIcon>
                                <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="white" />
                            </InputIcon>
                        </InputSlot>
                    </InputField>
                    
                </Input>
                <FormControlHelper>
                    <FormControlHelperText style={[GlobalStyles.white]}>Must be at least 6 characters long</FormControlHelperText>
                </FormControlHelper>
                <FormControlError>
                    <FormControlErrorIcon />
                    <FormControlErrorText />
                </FormControlError>

                <Button
                    style={styles.button}
                >
                <   ButtonText style={[GlobalStyles.white, {fontSize: 20, fontWeight: 'bold'}]}>Login</ButtonText>
                </Button>
            </FormControl>
        </VStack>
    )
}

const { width, height } = Dimensions.get('window');
const debug = false;

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'white',
        width: width * 0.2,
        height: height * 0.05,
        alignSelf: 'center',
        marginTop: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
    },
    debug: {
        borderWidth: debug ? 2 : 0,
        borderColor: debug ? 'red' : null,
    },
    space10: {
        marginBottom: height * 0.1,
    },
    inputSettings: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'white',
        height: height * 0.05,
        width: width * 0.6,
        marginTop: height * 0.02,
        marginBottom: height * 0.005,
    },
    structure: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40,
        paddingVertical: height * 0.05,
        //textAlign: 'center',
    }
})
