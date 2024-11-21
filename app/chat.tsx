import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Chat() {
	return (
		<ScrollView style={{ minHeight: '100%' }}>
			<View style={{ minHeight: '100%' }}>
				<View style={styles.senderChatContainer}>
					<Text style={{ color: 'white' }}>Chat</Text>
				</View>
				<View style={styles.receiverChatContainer}>
					<Text style={{ color: 'black' }}>Chat</Text>
				</View>
				<View style={styles.senderChatContainer}>
					<Text style={{ color: 'white' }}>Chat</Text>
				</View>
				<View style={styles.receiverChatContainer}>
					<Text style={{ color: 'black' }}>Chat</Text>
				</View>
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	senderChatContainer: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		backgroundColor: 'blue',
		width: 'auto',
		maxWidth: '60%',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		marginLeft: 'auto',
		marginRight: 10,
		marginTop: 10,
	},
	receiverChatContainer: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#EAE8E7',
		width: 'auto',
		maxWidth: '60%',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
		marginRight: 'auto',
		marginLeft: 10,
		marginTop: 10,
	},
	inputContainer: {
		position: 'fixed',
		bottom: 100,
		width: '100%',
		marginTop: 25,
	},
	input: {
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: '#EAE8E7',
		borderRadius: 15,
		padding: 10,
		margin: 10,
	},
});
