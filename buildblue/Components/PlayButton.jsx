import { TouchableOpacity, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function PlayButton()
{
    const [numClicks, setClicks] = useState(0);

    const viewStyle = {
        //borderWidth: 2,
        //borderColor: '#00d0ff',
        //borderRadius: 5,
        padding: 10,
        alignItems: 'center'
    }

    const textStyle = {
        color: '#00d0ff',
        fontSize: 50,
        
        
    }

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={() => {
            setClicks((numClicks) => numClicks + 1);
            }}>
                <Text style={textStyle}>Play</Text>
            </TouchableOpacity>
        </View>
        
    )
}