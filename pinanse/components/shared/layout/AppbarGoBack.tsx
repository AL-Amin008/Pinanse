import {HStack, IconButton, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppBarGoBack = () => {
  return (
    <HStack
      bg="primary"
      px="4"
      pb="2"
      pt="8"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack space="4" alignItems="center">
        <IconButton
          icon={<Ionicons name="ios-chevron-back" color="white" size={24} />}
        />

        <Text color="white" fontSize="18">
          Go Back
        </Text>
      </HStack>
    </HStack>
  );
};

export default AppBarGoBack;
