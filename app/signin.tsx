import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	Pressable,
} from 'react-native';
import { theme } from '@/constants/theme';
import { Link } from 'expo-router';

interface ButtonProps {
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled }) => {
	return (
		<TouchableOpacity
			style={[styles.button, disabled && styles.disabledButton]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const LoginScreen: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		console.log('Login pressed');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<Text style={{ color: 'f1f1f1', marginBottom: 40 }}>
				Discover new connections and meaningful relationships with our
				dating app
			</Text>
			<View style={{ width: '100%', marginBottom: 10, marginTop: 10 }}>
				<TextInput
					style={[styles.input, { marginBottom: 20 }]}
					placeholder='Email'
					value={email}
					onChangeText={setEmail}
					keyboardType='email-address'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
			</View>
			<TouchableOpacity activeOpacity={0.8}>
				<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
			</TouchableOpacity>
			<Link href={'/home'} asChild>
				<Pressable style={styles.button}>
					<Text style={{ color: 'white' }}>Login</Text>
				</Pressable>
			</Link>
			<View style={styles.signupContainer}>
				<Text style={styles.signupText}>Don't have an account? </Text>
				<TouchableOpacity>
					<Text style={styles.signupLink}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	logo: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 30,
	},
	title: {
		fontSize: theme.fontSizes.xlarge,
		fontWeight: 'bold',
		color: theme.colors.text,
		marginBottom: 30,
	},
	input: {
		width: '100%',
		backgroundColor: theme.colors.inputBackground,
		borderColor: theme.colors.inputBorder,
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		// marginBottom: 15,
		fontSize: theme.fontSizes.medium,
	},
	forgotPasswordText: {
		color: theme.colors.primary,
		fontSize: theme.fontSizes.small,
	},
	signupContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	signupText: {
		color: theme.colors.text,
		fontSize: theme.fontSizes.small,
	},
	signupLink: {
		color: theme.colors.primary,
		fontSize: theme.fontSizes.small,
		fontWeight: 'bold',
	},
	button: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 3,
		marginTop: '60%',
	},
	disabledButton: {
		opacity: 0.6,
	},
	buttonText: {
		color: 'white',
		fontSize: theme.fontSizes.medium,
		fontWeight: 'bold',
	},
});

export default LoginScreen;
