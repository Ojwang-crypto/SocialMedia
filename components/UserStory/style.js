import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(20),
    },
    firstName: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(14),
        color: '#022150',
        marginTop: verticalScale(8),
        textAlign: 'center',
        marginBottom: verticalScale(8),
    },

})
export default style