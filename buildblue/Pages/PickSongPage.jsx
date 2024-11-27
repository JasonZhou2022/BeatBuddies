import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Timer from '../Components/Timer';
import Theme from '../Components/Theme';
import PlayButton from '../Components/PlayButton';
//import PulsatingCircle from '../Components/PulsatingCircle';
//import Circle from '../assets/SVGs/PulsatingCircle'

export default function PickSongPage()
{
    const viewStyle = {
        height: "100%",
        width: '100%',
        //borderColor: 'red',
        //borderWidth: 2,
        //alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <View style={viewStyle}>
            <Theme />
            {/* <Circle width={50} height={50} /> */}
            <Timer />
            <PlayButton />
        </View> 
    )
}