import React from 'react';
import { View } from 'react-native';

const LineSeparatorView = ({color='black', height, style={}}) => {
    if(!height) height = 1;

    return (
        <View
            style={{
                height: height,
                width: '100%',
                backgroundColor: color,
                ...style
            }} />
    );
};

export default LineSeparatorView;