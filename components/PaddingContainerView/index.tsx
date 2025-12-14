import { View, ViewProps } from 'react-native';

import { cn } from '@/shared/utils';

interface PaddingContainerViewProps extends ViewProps {}

export function PaddingContainerView({
  children,
  className,
}: PaddingContainerViewProps) {
  return <View className={cn('px-4', className)}>{children}</View>;
}
