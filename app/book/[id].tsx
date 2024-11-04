import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { Skeleton } from 'moti/skeleton';
import { globalStyles } from '@/shared/theme';
import { useBookScreen } from './hooks/useBookScreen';

export default function BookScreen() {
  const { id, isLoading, manga } = useBookScreen();

  if (isLoading)
    return (
      <>
        <View
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

        <View style={{ gap: 20, marginTop: 40 }}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((e) => (
            <Skeleton key={e} height={40} width='100%' />
          ))}
        </View>
      </>
    );

  return (
    <>
      <View style={styles.header}>
        <Image source={{ uri: manga?.imageUrl }} style={styles.image} />
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              ...styles.text,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            {manga?.name ?? ''}
          </Text>

          <Text style={{ ...styles.text, fontWeight: 'bold', marginTop: 15 }}>
            Author:{' '}
            <Text style={{ fontWeight: 'normal' }}>{manga?.author ?? ''}</Text>
          </Text>

          <Text style={{ ...styles.text, fontWeight: 'bold', marginTop: 8 }}>
            Views:{' '}
            <Text style={{ fontWeight: 'normal' }}>{manga?.view ?? ''}</Text>
          </Text>

          <Text style={{ ...styles.text, fontWeight: 'bold', marginTop: 8 }}>
            Status:{' '}
            <Text style={{ fontWeight: 'normal' }}>{manga?.status ?? ''}</Text>
          </Text>

          <View style={styles.genresContainer}>
            {manga?.genres.map((genre) => (
              <Text key={genre} style={styles.genres}>
                {genre}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <FlatList
          data={manga?.chapterList}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          style={{ marginBottom: 240 }}
          renderItem={({ item }) => (
            <Pressable key={item.id} style={styles.link}>
              <Link href={`/book/${id}/${item.id}`}>
                <Text style={{ ...styles.text }}>{item.name}</Text>
              </Link>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    borderRadius: 10,
    height: 180,
    objectFit: 'cover',
    width: 130,
  },
  text: {
    color: globalStyles.textColorWhite.color,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  genres: {
    borderColor: '#B6C4B6',
    borderRadius: 5,
    borderWidth: 1,
    color: globalStyles.textColorWhite.color,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  link: {
    backgroundColor: '#05080E',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
});
