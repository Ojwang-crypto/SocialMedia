import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";


const style = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        marginLeft: horizontalScale(18),
    },
    userTextContainer: {
        justifyContent: 'center', 
        marginLeft: 10,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    username: {
        color : '#000',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(16),
    },
    location: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        marginTop: verticalScale(5),
        fontSize: scaleFontSize(12),
    },
    postImage: {
        alignItems: 'center',
        marginVertical: verticalScale(12)
    },
    userPostContainer: {
        marginTop: verticalScale(23),
        borderBottomWidth: 1,
        paddingBottom: verticalScale(15),
        borderBottomColor: '#EFF2F6'
    },
    userPostStats: {
        marginLeft: horizontalScale(27), flexDirection: 'row',
    },
    userPostStartButton : {
        flexDirection: 'row',
    },
    userPostStartButtonRight: {
        flexDirection: 'row', marginLeft: horizontalScale(27),
    },
    userPostStartText: {
        marginLeft: horizontalScale(3), color: '#79869F',
    }

});

export default style;