import {
  ActivityIndicator,
  FlatList,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { useChapterScreen } from './hooks/useChapterScreen';
import { useGesturePinch } from '@/shared/hooks/useGesturePinch';

// TODO: Arreglar height y width de las imagenes
// TODO: Manejar errores
export default function ChapterScreen() {
  const { chapter, isLoading } = useChapterScreen();
  const { width, height } = useWindowDimensions();
  const { animatedStyle, scale, savedScale, xValue, yValue } = useGesturePinch({
    height,
    width,
  });

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );

  return (
    <GestureHandlerRootView>
      <Animated.View style={{ flex: 1, ...animatedStyle }}>
        <FlatList
          data={chapter?.images ?? []}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            const handleGesturePinch = Gesture.Pinch()
              .onStart((e) => {
                xValue.value = e.focalX;
                yValue.value = e.focalY;
              })
              .onUpdate((e) => {
                if (scale.value < 0) return;
                scale.value = savedScale.value * e.scale;
              })
              .onEnd(() => {
                if (scale.value < 1) {
                  scale.value = withTiming(1);
                  savedScale.value = withTiming(1);
                  return;
                }
                savedScale.value = scale.value;
              });

            return (
              <Animated.View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GestureDetector gesture={handleGesturePinch}>
                  <Animated.Image
                    style={{
                      height: height - 390,
                      width: width - 50,
                      resizeMode: 'contain',
                    }}
                    source={{ uri: item.image }}
                    alt={item.title}
                  />
                </GestureDetector>
              </Animated.View>
            );
          }}
        />
      </Animated.View>
    </GestureHandlerRootView>
  );
}
