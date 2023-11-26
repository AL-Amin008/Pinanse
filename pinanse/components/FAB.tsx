import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import {
  Box,
  Fab,
  FormControl,
  Icon,
  Input,
  Modal,
  Radio,
  FlatList, // Replace ScrollView with FlatList
  Select,
  Stack,
} from 'native-base';
import React, {useState} from 'react';
import moment from 'moment';

function FAB() {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = React.useState('');
  const [date, setDate] = useState(new Date());
  const newDate = moment(date).format('LL');
  const [open, setOpen] = useState(false);
  const [groupValue, setGroupValue] = React.useState('1');

  // Removed the unused handleClick function

  const category = [
    '🏠 Housing',
    '🚗 Transportation',
    '🫕Food & Drinks',
    '⛽ Utilities',
    '🏥 Hospital',
    '🎉 Entertainment',
    '🥻Cloths',
    '🎓Education',
    '✈️Travel',
    '#️⃣Others',
  ];
  
  return (
      <Fab
        renderInPortal={true}
        _pressed={{
          backgroundColor: 'secondary',
        }}
        onPress={() => setShowModal(true)}
        backgroundColor={'primary'}
        borderRadius={'2xl'}
        right={'41%'}
        bottom={'5%'}
        size="70"
        icon={<Icon color="white" as={FontAwesomeIcon} name="plus" size="5" />}
      />
  );
}

export default FAB;
