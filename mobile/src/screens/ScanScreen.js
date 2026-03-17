import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const ScanScreen = () => {
    const [isScanning, setIsScanning] = useState(false);

    const handleBarCodeRead = (data) => {
        console.log('Barcode read:', data);
        setIsScanning(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                style={{ flex: 1 }}
                onBarCodeRead={isScanning ? handleBarCodeRead : undefined}
                captureAudio={false}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button title="Start Scanning" onPress={() => setIsScanning(true)} />
                    <Text>{isScanning ? 'Scanning...' : 'Press the button to scan'}</Text>
                </View>
            </RNCamera>
        </View>
    );
};

export default ScanScreen;
