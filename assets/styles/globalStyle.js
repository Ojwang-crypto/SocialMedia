import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from './scalling';
const globalStyle = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absoluite',
    left: horizontalScale(14),
    bottom: horizontalScale(22),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(5),
    marginTop: verticalScale(10),
  }
});

export default globalStyle;
