# react-native-drag

draggable, drag n drop, reanimated-draggable

## Installation

```sh
npm install @sushantdsuwal/react-native-drag
```

![myfile](https://github.com/sushantdsuwal/react-native-drag/blob/main/drag.gif)


## Usage

```js
import Drag from "@sushantdsuwal/react-native-drag";

// ...

<Drag
  height={height} // element height
  width={width} // element width
  x={x} // x position for element
  y={y} // y position for element
  maxHeight={maxHeight} //layout max height
  maxWidth={maxWidth} //layout max width
  onDragEnd={(boxPosition) => {
    const newBoxPosition = {
      ...boxPosition,
      x: boxPosition.x,
      y: boxPosition.y,
      height: boxPosition.height,
      width: boxPosition.width,
    }
  }} // new position of element after drag
>
  <View><Text>Box 1</Text></View>
</Drag>

```



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
