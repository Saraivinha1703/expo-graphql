import { View, Text, Pressable } from 'react-native';
import { ThemeSwitcher } from '../Themes/ThemeSwitcher';
import { useQuery } from '@apollo/client';
import { GET_USER, GET_USERS } from '../graphql/queries/user';

export function Test() {
  const allUsers = useQuery(GET_USERS).data;
  const staticUser = useQuery(GET_USER).data;

  return (
    <View className="flex-1 items-center justify-center bg-secondary">
      <Text className="text-primary text-lg font-semibold">
        Open up App.tsx to start working on your app!
      </Text>

      <Pressable>
        <Text>Search for all Users</Text>
      </Pressable>

      <Pressable>
        <Text>Search for static User</Text>
      </Pressable>

      <ThemeSwitcher />
    </View>
  );
}
