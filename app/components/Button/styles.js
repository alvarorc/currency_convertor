import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$lightGray',
    fontSize: 15,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
