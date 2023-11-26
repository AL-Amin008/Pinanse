import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import FAB from '../components/FAB';
import TabBar from '../components/TabBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Home() {
  const totalIncome = '250';
  const totalExpenses = '250.56';
  return (
    <Box bg={"coolGray.100"} boxSize={'full'} size={'full'} safeArea={true}>
      <HStack alignItems={'center'} justifyContent={'center'} space={5}>
        <Box
          height={'70%'}
          width={'70%'}
          rounded="xl"
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection="row"
          marginTop={10}
          marginBottom={10}>
          <VStack alignItems={'center'} justifyContent={'center'}>
            <Text fontSize="xl" fontWeight={'700'} color={'primary'}>
              Total Expense
            </Text>
            <Text fontSize="6xl" fontWeight={'700'} color={'primary'}>
              ${totalExpenses}
            </Text>
          </VStack>
        </Box>
      </HStack>
      <TabBar />
      <FAB />
    </Box>
  );
}

export default Home;
