import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('Designs')}>
        <Text>
            Designs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Inputs')}>
        <Text>
            Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;