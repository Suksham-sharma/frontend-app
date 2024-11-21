import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const router = useRouter();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	const BackButton = () => (
		<TouchableOpacity onPress={() => router.back()}>
			<ChevronLeft size={24} color='black' />
		</TouchableOpacity>
	);

	return (
		<Stack
			screenOptions={{
				headerLeft: () => <BackButton />,
			}}
		>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen
				name='home'
				options={{
					presentation: 'fullScreenModal',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='signin'
				options={{ presentation: 'fullScreenModal' }}
			/>
			<Stack.Screen name='signup' options={{ presentation: 'modal' }} />
			<Stack.Screen
				name='chat'
				options={{ presentation: 'fullScreenModal', headerShown: true }}
			/>
		</Stack>
	);
}
