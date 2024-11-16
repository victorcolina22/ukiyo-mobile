import { Link } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { globalStyles } from '@/shared/theme';
import { useHomeScreen } from '../hooks/useHomeScreen';
import { Skeleton } from '@/components/Skeleton';

export default function HomeScreen() {
  const { mangas, isLoading, error, isRefreshing, handlePullToRefresh } =
    useHomeScreen();

  if (isLoading)
    return Array.from({ length: 5 }, (_, index) => index + 1).map((e) => (
      <View key={e} style={styles.view}>
        <Skeleton />
      </View>
    ));

  if (error.show)
    return (
      <View style={styles.view}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              tintColor={globalStyles.textColorWhite.color}
              onRefresh={handlePullToRefresh}
            />
          }
          contentContainerStyle={globalStyles.center}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={{ ...styles.text, fontSize: 24 }}>
              {error.message}
            </Text>
          </View>
        </ScrollView>
      </View>
    );

  return (
    <View style={styles.view}>
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
                <Text
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  style={styles.title}
                >
                  {item.title}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  style={styles.text}
                >
                  {item.description}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  style={styles.text}
                >
                  <Text style={{ fontWeight: 'bold' }}>Views: </Text>
                  {item.view}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  style={styles.text}
                >
                  <Text style={{ fontWeight: 'bold' }}>Chapter: </Text>
                  {item.chapter}
                </Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
  },
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
