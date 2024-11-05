import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const useGesturePinch = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const xValue = useSharedValue(0);
  const yValue = useSharedValue(0);
  const imageCenter = {
    x: width / 2,
    y: height / 2,
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: xValue.value },
      { translateY: yValue.value },
      { translateX: -imageCenter.x },
      { translateY: -imageCenter.y },
      { scale: scale.value },
      { translateX: -xValue.value },
      { translateY: -yValue.value },
      { translateX: imageCenter.x },
      { translateY: imageCenter.y },
    ],
  }));

  return {
    animatedStyle,
    savedScale,
    scale,
    xValue,
    yValue,
  };
};
