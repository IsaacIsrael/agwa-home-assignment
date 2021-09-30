import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { isIOS } from '../../utils/system';


const TouchableWithNativeFeedback = ({ style, children, ...props }) => (
  <TouchableNativeFeedback {...props} style={null}>
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
);

const Touchable = isIOS ? TouchableOpacity : TouchableWithNativeFeedback;

export default Touchable;
