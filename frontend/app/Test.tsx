import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ThemeSwitcher } from '../Themes/ThemeSwitcher';
import {
  ApolloError,
  OperationVariables,
  QueryResult,
  useQuery,
} from '@apollo/client';
import { GET_USER, GET_USERS, HELLO_WORLD } from '../graphql/queries/user';

type FetchObjResult = {
  data: any;
  loading: boolean;
  error: ApolloError | undefined;
};

export function Test() {
  const users = useQuery(GET_USERS);
  const user = useQuery(GET_USER);
  const hello = useQuery(HELLO_WORLD);
  const [fetchedObj, setFetchedObj] = useState<FetchObjResult | null>(null);

  function handleQuery(result: QueryResult<any, OperationVariables>) {
    result.refetch().then(res => {
      setFetchedObj({
        data: res.data,
        loading: res.loading,
        error: res.error,
      });
    });
  }

  return (
    <View className="flex-1 items-center justify-center bg-secondary">
      <Text className="text-primary text-lg font-semibold">
        Open up App.tsx to start working on your app!
      </Text>

      {fetchedObj ? (
        <View>
          <Text className="text-outstand-secondary text-md font-semibold p-3 text-center">
            {fetchedObj.loading
              ? 'loading...'
              : JSON.stringify(fetchedObj.data)}
          </Text>
          <Text className="text-red-500">
            {fetchedObj.error ? 'Error: ' + fetchedObj.error.message : ''}
          </Text>
        </View>
      ) : (
        <Text className="text-outstand-secondary font-bold text-lg my-10">
          No Query made yet.
        </Text>
      )}
      <View className="gap-y-5">
        <Pressable
          className="bg-outstand-secondary p-2 items-center rounded-lg"
          onPress={() => {
            handleQuery(hello);
          }}
        >
          <Text className="text-primary">Hello World :)</Text>
        </Pressable>

        <Pressable
          className="bg-outstand-secondary p-2 items-center rounded-lg"
          onPress={() => {
            handleQuery(users);
          }}
        >
          <Text className="text-primary">Search for all Users</Text>
        </Pressable>

        <Pressable
          className="bg-outstand-secondary p-2 items-center rounded-lg"
          onPress={() => {
            handleQuery(user);
          }}
        >
          <Text className="text-primary">Search for static User</Text>
        </Pressable>
      </View>

      <ThemeSwitcher />
    </View>
  );
}
