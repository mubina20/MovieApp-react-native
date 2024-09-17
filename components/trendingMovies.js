import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';

function TrendingMovies({data}) {
    return (
        <View style={styles.trendingContainer}>
            <Text style={styles.text1}>Trending</Text>
            <Carousel 
                data={data}
                renderItem={ ({item}) => <MovieCard item={item} /> }
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={600}
                itemWidth={400}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    )
}

const MovieCard = ({item}) => {
    return (
        <TouchableWithoutFeedback>
            <Text style={styles.text2}>Movie</Text>
        </TouchableWithoutFeedback>
    )
}

export default TrendingMovies

const styles = StyleSheet.create({
    trendingContainer: {
        marginLeft: 15,
        backgroundColor: '#fff'
    },
    text1: {
        color: '#fff',
        fontSize: 20
    },
    text2: {
        color: '#fff',
    },
});