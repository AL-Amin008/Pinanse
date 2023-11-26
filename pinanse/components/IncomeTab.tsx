import {Box, VStack, Text, HStack, Icon, Pressable, Badge} from 'native-base';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SwipeListView} from 'react-native-swipe-list-view';

function IncomeTab() {
  const data = [
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      category: 'Food & Drinks',
      title: 'Ramen',
      emoji: '🍜',
      time: 'Today',
      amount: '$26',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d73',
      category: 'Food & Drinks',
      title: 'Ramen',
      emoji: '🍜',
      time: 'Today',
      amount: '$26',
    },
  ];
  const [listData, setListData] = useState(data);

  const renderItem = () => (
    <Box bg={'white'} px="3" py="4" >
        <VStack justifyContent="flex-start" space={1}>
          <HStack justifyContent={'space-between'} alignItems="center">
            <HStack alignItems={'center'} space={5}>
              <Box
              bgColor={'gray.200'}
                h={'60px'}
                w={'50px'}
                alignItems={'center'}
                justifyContent={'center'}
                rounded={'xl'}>
                <Text fontSize="2xl">🍜</Text>
              </Box>
              <VStack>
                <HStack space={5}>
                  <Text fontSize="md" fontWeight="700" color="black">
                    Food & Drinks
                  </Text>
                  <Badge
                    colorScheme="info"
                    variant={'outline'}
                    rounded="md"
                    alignItems="center"
                    h={6}>
                    November 20
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="gray.400">
                  Ramen
                </Text>
              </VStack>
            </HStack>
            <Text fontSize="lg" fontWeight="700" color="black">
              -$26
            </Text>
          </HStack>
        </VStack>
    </Box>
  );

  const renderHiddenItem = (data: {item: {key: any}}, rowMap: any) => (
    <HStack flex="1">
      <Pressable
        w="70"
        ml="auto"
        bg="coolGray.200"
        justifyContent="center"
        alignItems="center"
        onPress={() => ''}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2} justifyContent={'center'}>
          <Icon
            as={<Entypo name="dots-three-horizontal" />}
            size="xs"
            color="coolGray.800"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            Edit
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        bg="red.500"
        justifyContent="center"
        onPress={() => ''}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );
  return (
    <>
      <Box flex="1" w="100%" h="100%" pt={3} >
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-160}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={2000}
        />
      </Box>
    </>
  );
}

export default IncomeTab;
