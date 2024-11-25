import { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

export default function Theme()
{
    let songThemes = ['Summer on the Beach', 'Sad', 'Happy']
    const [randomIndex, setRandomIndex] = useState(() => 
        Math.floor(songThemes.length * Math.random())
    );
    //const { width, height } = Dimensions.get('window'); // Get screen dimensions
    const viewStyle = {
        // flex: 1,
        //top: height * 1,
        // height: '100%',
        // width: "100%",
        //borderColor: 'white',
        //borderWidth: 2,
        //justifyContent: 'flex-end'
        alignItems: 'center',
        height: '85%',
        width: '100%',
        position: 'absolute'
    }

    const textStyle = {
        color: 'white',
        fontSize: 40,
        // textAlign: 'center'
    }

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{songThemes[randomIndex]}</Text>
        </View>
    )
}