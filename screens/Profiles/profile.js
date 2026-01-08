import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>Welcome to profile page</Text>
    </SafeAreaView>
  );
};

export default Profile;
