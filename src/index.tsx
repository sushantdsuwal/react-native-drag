import React, { useEffect, useRef } from 'react';
import type { ViewStyle } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  'worklet';
  return Math.min(Math.max(lowerBound, value), upperBound);
};

export type OnDragEndResponseType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type DragProps = {
  x: number;
  y: number;
  maxHeight: number;
  maxWidth: number;
  height?: number;
  width?: number;
  onDragEnd: (response: OnDragEndResponseType) => void;
  children: any;
  draggable?: boolean;
  style?: ViewStyle;
};

function Drag(props: DragProps) {
  const {
    x,
    y,
    maxHeight,
    maxWidth,
    height = 100,
    width = 100,
    onDragEnd,
    children,
    draggable = true,
    style,
  } = props;

  const xRef = useRef(x);
  const yRef = useRef(y);
  const heightRef = useRef(height);
  const widthRef = useRef(width);
  const boxX = useSharedValue(0);
  const boxY = useSharedValue(0);
  const boxHeight = useSharedValue(heightRef.current ?? 100);
  const boxWidth = useSharedValue(widthRef.current ?? 100);

  useEffect(() => {
    boxX.value = withTiming(xRef.current);
    boxY.value = withTiming(yRef.current);
  }, [boxX, boxY]);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (
      _ev: { translationX: number; translationY: number },
      ctx: { offsetX: number; offsetY: number }
    ) => {
      ctx.offsetX = boxX.value;
      ctx.offsetY = boxY.value;
    },
    onActive: (
      ev: { translationX: number; translationY: number },
      ctx: { offsetX: number; offsetY: number }
    ) => {
      if (!draggable) {
        return;
      }
      boxX.value = clamp(
        ctx.offsetX + ev.translationX,
        0,
        maxWidth - boxWidth.value
      );
      boxY.value = clamp(
        ctx.offsetY + ev.translationY,
        0,
        maxHeight - boxHeight.value
      );
    },
    onFinish: () => {
      if (onDragEnd) {
        runOnJS(onDragEnd)({
          x: boxX.value,
          y: boxY.value,
          height: boxHeight.value,
          width: boxWidth.value,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: boxX.value,
      },
      {
        translateY: boxY.value,
      },
    ],
    height: boxHeight.value,
    width: boxWidth.value,
    position: 'absolute',
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </PanGestureHandler>
  );
}

export default Drag;
