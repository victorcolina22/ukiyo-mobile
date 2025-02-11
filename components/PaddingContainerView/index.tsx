import { View, ViewProps } from 'react-native';

interface PaddingContainerViewProps extends ViewProps {}

export function PaddingContainerView({
  children,
  className,
}: PaddingContainerViewProps) {
  return <View className={`px-4 ${className}`}>{children}</View>;
}
