import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Timer from '../Components/Timer';
import Theme from '../Components/Theme';
import PlayButton from '../Components/PlayButton';

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
            <Timer />
            <PlayButton />
        </View> 
    )
}