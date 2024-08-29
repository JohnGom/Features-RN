import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const list = [
    {
        uid: 1,
        name: "octocat",
        status: "GitHub's official mascot",
        imageUrl: "https://avatars.githubusercontent.com/u/583231?v=4"
    },
    {
        uid: 2,
        name: "torvalds",
        status: "Creator of Linux and Git",
        imageUrl: "https://avatars.githubusercontent.com/u/1024025?v=4"
    },
    {
        uid: 3,
        name: "mojombo",
        status: "Co-founder of GitHub",
        imageUrl: "https://avatars.githubusercontent.com/u/1?v=4"
    }
  ];
  return (
    <View> 
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container} 
      scrollEnabled={false}
      >
        {list.map(({uid, name, status, imageUrl}) => (
           <View key={uid} style={styles.userCard}>
            <Image 
            source={{
              uri: imageUrl
            }}
            style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text> 
              <Text style={styles.userStatus}>{status}</Text>
            </View>
           </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  userStatus: {
    fontSize: 12
  }
});

export default ContactList;
