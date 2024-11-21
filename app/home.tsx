import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
	return (
		<SafeAreaView>
			<View>
				<Image
					style={styles.img}
					source={{
						uri: 'https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg',
					}}
				/>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginLeft: 50,
						marginRight: 50,
						marginTop: 15,
					}}
				>
					<TouchableOpacity activeOpacity={0.8}>
						<Image
							source={{
								uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png',
							}}
							style={styles.btns}
						/>
					</TouchableOpacity>
					{/* <Link href={'/chat'} asChild> */}
					<TouchableOpacity activeOpacity={0.8}>
						<Image
							source={{
								uri: 'https://cdn.iconscout.com/icon/free/png-256/free-love-icon-download-in-svg-png-gif-file-formats--heart-emoji-facebook-reaction-pack-sign-symbols-icons-1991064.png',
							}}
							style={styles.btns}
						/>
					</TouchableOpacity>
					{/* </Link> */}
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	img: {
		width: '90%',
		height: '85%',
		borderRadius: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 20,
	},
	btns: {
		width: 60,
		height: 60,
	},
});

export default Home;
