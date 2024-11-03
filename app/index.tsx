import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { MangaList } from '@/interfaces/mangaList';
import { MangaService } from '@/services/mangas-service';
import { globalStyles } from '@/shared/theme';

export default function HomeScreen() {
  const [mangas, setMangas] = useState<MangaList[] | null>([]);

  useEffect(() => {
    getMangas();
  }, []);

  const getMangas = async () => {
    const response = await MangaService.getMangaListByPage(1);
    setMangas(response?.mangaList ?? []);
  };

  return (
    <FlatList
      data={mangas}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <Link href={`/book/${item.id}`}>
          <View style={styles.container}>
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
          </View>
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
