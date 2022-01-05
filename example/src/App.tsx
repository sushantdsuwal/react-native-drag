import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Drag from 'react-native-drag';
import BOX_ARRAY from './BOX_ARRAY';

export default function App() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [boxArray, setBoxArray] = useState(BOX_ARRAY);

  return (
    <SafeAreaView style={styles.container}>
      <View
        onLayout={(ev) => {
          const layout = ev.nativeEvent.layout;
          setMaxHeight(layout.height);
          setMaxWidth(layout.width);
        }}
        style={styles.boxContainer}
      >
        {boxArray.map(({ color, name, x, y, height, width }, index) => (
          <Drag
            key={index}
            height={height}
            width={width}
            x={x}
            y={y}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            onDragEnd={(boxPosition) => {
              const _boxArray = [...boxArray];
              const _box = _boxArray[index];
              _boxArray[index] = {
                ..._box,
                x: boxPosition.x,
                y: boxPosition.y,
                height: boxPosition.height,
                width: boxPosition.width,
              };
              setBoxArray(_boxArray);
            }}
          >
            <View
              style={[
                StyleSheet.absoluteFill,
                styles.box,
                {
                  backgroundColor: color,
                },
              ]}
            >
              <Text>{name}</Text>
            </View>
          </Drag>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
});
