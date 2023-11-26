import {Box, useColorModeValue, HStack} from 'native-base';
import React from 'react';
import {View, useWindowDimensions, Animated, Pressable} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import ExpenseTab from './ExpenseTab';
import IncomeTab from './IncomeTab';

function TabBar() {
  const renderScene = SceneMap({
    first: IncomeTab,
    second: ExpenseTab,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Income'},
    {key: 'second', title: 'Expense'},
  ]);

  const renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: {interpolate: (arg0: {inputRange: any; outputRange: any}) => any};
  }) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map(function (
          route: {
            title:
              | string
              | number
              | boolean
              | Animated.Value
              | Animated.AnimatedInterpolation<string | number>
              | Animated.WithAnimatedObject<
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                >
              | Animated.WithAnimatedObject<React.ReactFragment>
              | Animated.WithAnimatedObject<React.ReactPortal>
              | null
              | undefined;
          },
          i: React.SetStateAction<number>,
        ) { 
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            index === i
              ? useColorModeValue('white', 'secondary')
              : useColorModeValue('gray', '#e5e5e5');

          const tcolor =
            index === i
              ? useColorModeValue('#0b182f', 'secondary')
              : useColorModeValue('white', '#e5e5e5');

          return (
            <Box flex={1} alignItems="center" p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Box
                  p={1}
                  bgColor={tcolor}
                  w={'120'}
                  alignItems="center"
                  justifyContent="center"
                  rounded={'xl'}>
                  <Animated.Text
                    style={{
                      color,
                      fontWeight: '700',
                      fontSize: 17,
                    }}>
                    {route.title}
                  </Animated.Text>
                </Box>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      backgroundColor="white"
      boxSize={'full'}
      size={'full'}
      shadow={2}
      roundedTop={'2xl'}
      paddingTop={1}>
      <TabView
        swipeEnabled={false}
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </Box>
  );
}

export default TabBar;
