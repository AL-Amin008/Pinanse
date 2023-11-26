import {
  Center,
  Container,
  useSafeArea,
  Text,
  CheckIcon,
  Select,
  Stack,
  Button,
  Box,
} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

import AppBarGoBack from '../components/shared/layout/AppbarGoBack';

function SearchCurr({navigation}: {navigation: any}) {
  const [service, setService] = React.useState('');

  const safeAreaProps = useSafeArea({
    safeAreaBottom: true,
    safeAreaTop: true,
    pt: 130,
    pb: 140,
  });

  const currencyList = [
    {
      name: 'UntiedSates Dollar',
      curr: 'USD',
    },
    {
      name: 'Bangladeshi Taka',
      curr: 'BDT',
    },
    {
      name: 'Indian Rupee',
      curr: 'INR',
    },
    {
      name: 'Pakistani Rupee',
      curr: 'PKR',
    },
  ];

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <>
      <Center>
        {/* <AppBarGoBack /> */}
        <Container {...safeAreaProps} height={screenHeight} width={screenWidth}>
          <Stack justifyContent="space-between" flex={1} width="100%" >
            <Box>
              <Text fontWeight="500" fontSize={'2xl'} mb="4">
                Select Currency 👇🏼
              </Text>
              <Select
                selectedValue={service}
                borderWidth={1}
                width="100%"
                placeholder="Choose Currency"
                fontSize={'md'}
                _selectedItem={{
                  bg: 'black.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                {currencyList.map(currency => (
                  <Select.Item label={currency.name} value={currency.curr} />
                ))}
              </Select>
            </Box>
            <Button
              backgroundColor={'primary'}
              size={'md'}
              _text={{
                fontWeight: '500',
              }}
              onPress={() => navigation.navigate('Home')}>
              Continue
            </Button>
          </Stack>
        </Container>
      </Center>
    </>
  );
}

export default SearchCurr;
