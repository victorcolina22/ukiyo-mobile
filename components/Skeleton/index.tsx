import { View } from 'react-native';
import { Skeleton as MotiSkeleton } from 'moti/skeleton';

export function Skeleton() {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
      }}
    >
      <MotiSkeleton height={180} width={130} />
      <View style={{ gap: 20 }}>
        <MotiSkeleton height={20} width={200} />
        <MotiSkeleton height={20} width={200} />
        <MotiSkeleton height={20} width={100} />
        <MotiSkeleton height={20} width={140} />
      </View>
    </View>
  );
}
