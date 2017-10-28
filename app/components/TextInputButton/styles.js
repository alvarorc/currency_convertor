import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const borderRadius = 4;
const inputHeight = 45;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: inputHeight,
    borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  button: {
    height: inputHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 10,
    color: '$primaryBlue',
  },
  border: {
    height: inputHeight,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    flex: 1,
    height: inputHeight,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '$inputText',
  },
});
