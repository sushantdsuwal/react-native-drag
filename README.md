# react-native-drag

draggable, drag, drop, reanimated-draggable

## Installation

```sh
npm install react-native-drag
```

## Usage

```js
import Drag from "react-native-drag";

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
  <View><Text>title</Text></View>
</Drag>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
