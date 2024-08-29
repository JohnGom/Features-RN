import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) { 
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's is new about javascript 21 - ES12
          </Text>
        </View>
        <Image 
        source={{ uri: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
         style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            This version introduces the replaceAll method for strings; Promise. any , a promise combinator that short-circuits when an input value is fulfilled; AggregateError , a new error type to represent multiple errors at once; logical assignment operators ??=
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            style={styles.socialLinks}
            onPress={() => openWebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}>
                <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.socialLinks}
            onPress={() => openWebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}>
                <Text>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 350,
      height: 340,
      borderRadius: 6,
      marginHorizontal: 16,
      marginVertical: 12
    },
    elevatedCard: {
      backgroundColor: '#E07C24',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.4
    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600'
    },
    cardImage: {
      height: 180
    },
    bodyContainer: {
      padding: 10
    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    socialLinks: {
      fontSize: 16,
      color: '#000000',
      backgroundColor: '#FFF',
      borderRadius: 6,
      paddingHorizontal: 20,
      paddingVertical: 6
    }
})