import {
  ActivityIndicator,
  FlatList,
  Image,
  View,
  useWindowDimensions,
} from 'react-native';
import { useChapterScreen } from './hooks/useChapterScreen';

// TODO: Arreglar height y width de las imagenes
export default function ChapterScreen() {
  const { chapter, isLoading } = useChapterScreen();

  const { width, height } = useWindowDimensions();

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={chapter?.images ?? []}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                height: height - 390,
                width: width - 50,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
              alt={item.title}
            />
          </View>
        )}
      />
    </View>
  );
}
