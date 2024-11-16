import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '@/shared/theme';

export default function SearchScreen() {
  return (
    <View style={styles.view}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
  },
});
