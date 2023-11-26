import {
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
  useSafeArea,
  VStack,
} from 'native-base';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/pinanse-530ee.appspot.com/o/Asset%202.png?alt=media&token=24a47e4d-e4ed-4e31-b740-aabd875bcd9a';

function LogIn({navigation}: {navigation: any}) {
  const safeAreaProps = useSafeArea({
    safeAreaBottom: true,
    safeAreaTop: true,
    pt: 130,
    pb: 140,
  });
  function signInWithGoogle(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Center {...safeAreaProps}>
      <Container pt={20} pb={20}>
        <Flex
          flex={1}
          flexDirection={'column'}
          justifyContent={'space-between'}>
          <VStack alignItems={'center'}>
            <Image
              source={{
                uri: LOGO,
              }}
              alt="Alternate Text"
              resizeMode="center"
              width={'100%'}
              h={60}
            />
            <Text fontWeight="700" fontSize={'sm'} marginTop={10}>
              Make your expenses and income tracking easier
            </Text>
          </VStack>
          <Button
            onPress={() => navigation.navigate('App')}
            leftIcon={<FontAwesomeIcon icon={faGoogle} color="white" />}
            backgroundColor={'primary'}
            _text={{
              fontWeight: '700',
            }}
            size={'md'}>
            Connect with Google
          </Button>
        </Flex>
      </Container>
    </Center>
  );
}

export default LogIn;
