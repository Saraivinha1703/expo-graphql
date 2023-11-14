import { Text, View } from 'react-native';
import '../global.css';
import { Theme } from '../Themes';
import { ThemeSwitcher } from '../Themes/ThemeSwitcher';
export default function App() {
  return (
    <Theme>
      <View className="flex-1 items-center justify-center bg-secondary">
        <Text className="text-primary text-lg font-semibold">
          Open up App.tsx to start working on your app!
        </Text>

        <ThemeSwitcher />
      </View>
    </Theme>
  );
}
