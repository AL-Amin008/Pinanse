import {
  Box,
  FormControl,
  IconButton,
  Input,
  Text,
  useSafeArea,
  VStack,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Account() {
  const safeAreaProps = useSafeArea({
    safeAreaBottom: true,
    safeAreaTop: true,
    pt: '20',
  });
  return (
    <Box
      backgroundColor="primary"
      boxSize={'full'}
      size={'full'}
      alignItems="center"
      justifyContent="center"
      {...safeAreaProps}>
      <Text fontSize="3xl" fontWeight="700" color="white" p={10}>
        Account
      </Text>
      <Box
        backgroundColor="white"
        boxSize={'full'}
        size={'full'}
        roundedTop={'2xl'}
        paddingTop={1}>
        <VStack p={7}>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              type="text"
              w="100%"
              fontSize={'md'}
              fontWeight="700"
              InputRightElement={
                <IconButton
                  size="lg"
                  rounded="none"
                  bgColor={'primary'}
                  w="1/6"
                  h="full"
                  variant="solid"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'account-edit',
                  }}
                  onPress={() => {
                    ('');
                  }}></IconButton>
              }
              placeholder="Alamin"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              w="100%"
              fontSize={'md'}
              fontWeight="700"
              InputRightElement={
                <IconButton
                  size="lg"
                  rounded="none"
                  bgColor={'primary'}
                  w="1/6"
                  h="full"
                  variant="solid"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'account-edit',
                  }}
                  onPress={() => {
                    ('');
                  }}></IconButton>
              }
              placeholder="Khan"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              type="text"
              w="100%"
              fontSize={'md'}
              fontWeight="700"
              InputRightElement={
                <IconButton
                  size="lg"
                  rounded="none"
                  bgColor={'primary'}
                  w="1/6"
                  h="full"
                  variant="solid"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'account-edit',
                  }}
                  onPress={() => {
                    ('');
                  }}></IconButton>
              }
              placeholder="alamin788"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Telegram Username</FormControl.Label>
            <Input
              type="text"
              w="100%"
              fontSize={'md'}
              fontWeight="700"
              InputRightElement={
                <IconButton
                  size="lg"
                  rounded="none"
                  bgColor={'primary'}
                  w="1/6"
                  h="full"
                  variant="solid"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'account-edit',
                  }}
                  onPress={() => {
                    ('');
                  }}></IconButton>
              }
              placeholder="Alamin234"
            />
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
}
