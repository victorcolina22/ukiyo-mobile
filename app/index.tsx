import { Link } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { globalStyles } from '@/shared/theme';
import { useHomeScreen } from './hooks/useHomeScreen';

export default function HomeScreen() {
  const { mangas, isLoading } = useHomeScreen();

  if (isLoading)
    return Array.from({ length: 5 }, (_, index) => index + 1).map((e) => (
      <View
        key={e}
        style={{
          flexDirection: 'row',
          gap: 10,
          marginBottom: 10,
        }}
      >
        <Skeleton height={180} width={130} />
        <View style={{ gap: 20 }}>
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={140} />
        </View>
      </View>
    ));

  return (
    <FlatList
      data={mangas}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <Link asChild href={`/book/${item.id}`}>
          <Pressable style={styles.container}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              alt={item.title}
            />

            <View style={{ flexShrink: 1 }}>
              <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
                {item.description}
              </Text>
              <Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Views: </Text>
                {item.view}
              </Text>
              <Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Chapter: </Text>
                {item.chapter}
              </Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    color: globalStyles.textColorWhite.color,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: globalStyles.textColorWhite.color,
    marginTop: 5,
  },
  image: {
    borderRadius: 10,
    height: 180,
    objectFit: 'cover',
    width: 130,
  },
});
