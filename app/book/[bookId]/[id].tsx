import {
  ActivityIndicator,
  ListRenderItemInfo,
  Text,
  View,
  VirtualizedList,
  useWindowDimensions,
} from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

// Hooks
import { useChapterScreen } from './hooks/useChapterScreen';
import { useGesturePinch } from '@/shared/hooks/useGesturePinch';

// TODO: Arreglar height y width de las imagenes
// TODO: Manejar errores
export default function ChapterScreen() {
  const { chapter, isLoading, error } = useChapterScreen();
  const { width, height } = useWindowDimensions();
  const { animatedStyle, scale, savedScale, xValue, yValue } = useGesturePinch({
    height,
    width,
  });

  if (isLoading)
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator />
      </View>
    );

  if (error.show) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-white'>{error.message}</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <Animated.View style={{ flex: 1, ...animatedStyle }}>
        <VirtualizedList
          data={chapter}
          keyExtractor={(item) => item.chapterImageUrl}
          getItemCount={() => chapter?.length ?? 0}
          getItem={(data, index) => data[index]}
          renderItem={({
            item,
          }: ListRenderItemInfo<{ chapterImageUrl: string }>) => {
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
              <Animated.View className='flex-1 items-center justify-center'>
                <GestureDetector gesture={handleGesturePinch}>
                  <Animated.Image
                    style={{
                      height: height - 390,
                      width: width - 50,
                      resizeMode: 'contain',
                    }}
                    source={{ uri: item.chapterImageUrl }}
                    alt={item.chapterImageUrl}
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
