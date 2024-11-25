import { useEffect, useState } from 'react';
import { View, Text, registerCallableModule } from 'react-native';

export default function Timer()
{
    const [time, setTime] = useState(30);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime((time) => {
                if (time <= 0)
                    return 30;
                else
                    return time - 1;
            })
        }, 1000)

        return () => { clearInterval(intervalID); }
    }, [])

    const divStyle = {
        width: '100%',
        alignItems: 'center',
        shadowColor: '#00d0ff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
    
    const textStyle = {
        fontSize: 150,
        color: '#fff',
        // textShadowColor: '#00d0ffff',
        // textShadowOffset: {width: 0, height: 0},
        // textShadowRadius: 100
        
        
    }
    
    return (
        <View style={divStyle}>
            <View style={divStyle}>
                <Text style={textStyle}>{time}</Text>
            </View>
        </View>
    )
}