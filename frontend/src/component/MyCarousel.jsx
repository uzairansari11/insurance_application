import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import YouTube from "react-native-youtube";

export const MyCarousel = ({ entries }) => {
	const [page, setPage] = useState(0);
	const isCarousel = useRef(null);

	const renderVideo = ({ item }) => {
		return (
			<View style={styles.videoContainer}>
				<YouTube
					videoId={item.youtubeId}
					play={false} // Set to true to autoplay
					style={styles.video}
				/>
			</View>
		);
	};

	return (
		<ScrollView style={styles.container}>
			<Carousel
				ref={isCarousel}
				onSnapToItem={(page) => setPage(page)}
				data={entries}
				renderItem={renderVideo}
				sliderWidth={400}
				itemWidth={350}
			/>
			<Pagination
				activeDotIndex={page}
				carouselRef={isCarousel}
				tappableDots={true}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				dotsLength={entries.length}
				dotStyle={styles.activeDotStyle}
				inactiveDotStyle={styles.inactiveDotStyle}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f2f2f2",
	},
	videoContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: 250,
		backgroundColor: "#000",
	},
	video: {
		alignSelf: "stretch",
		height: 250,
	},
	activeDotStyle: {
		width: 20,
		borderRadius: 18,
		backgroundColor: "#0074FF",
	},
	inactiveDotStyle: {
		backgroundColor: "grey",
	},
});
