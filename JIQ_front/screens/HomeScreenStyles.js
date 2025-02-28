import { StyleSheet } from 'react-native';
import { theme } from "../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    headerBg: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.screenBg,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        marginHorizontal: 5,
        marginVertical: 5,
        color: theme.textColor,
    },
    bottom: {
        backgroundColor: "white",
        //borderRadius: "30%",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 20,
        //marginBottom: 10,
        //marginHorizontal: 20,
        justifyContent: "space-around",
    },
    /*
    screen: {
        backgroundColor: theme.screenBg,
        height: "100%",
        borderRadius: 15,
        flexDirection:"column",
        justifyContent: "flex-start",
    },
    */
    separator: {
        height: 3,
        width: "97%",
        backgroundColor: theme.screenBg,
        //marginBottom: 10,
        borderRadius: 15,
        justifyContent: "center",
        alignSelf: "center",
    },
    verticalSeparator: {
        height: "90%",
        width: "5",
        backgroundColor: theme.folderColor,
        borderRadius: 15,
        justifyContent: "center",
        alignSelf: "center",
    },
    scrollContainer: {
        padding: 10,
        alignItems: "flex-start",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginVertical: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    modalItem: {
        backgroundColor: "#1A1C20",
        width: "50%",
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    modalText: {
        color: theme.bg,
        fontSize: 15,
        marginHorizontal: 20,
    },
    modalscreen: {
        backgroundColor: theme.bg,
        width: "80%",
        marginBottom: 10,
        paddingVertical: 50,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    folderModalScreen: {
        backgroundColor: theme.bg,
        width: "50%",
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginBottom:10,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        backgroundColor: theme.screenBg,
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginVertical: 20,
        textAlign: "center",
        fontSize: 30,
    },
    changeNameinput: {
        backgroundColor: theme.screenBg,
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
        textAlign: "center",
        fontSize: 30,
    },
    Button: {
        backgroundColor: theme.iconColor,
        paddingHorizontal: 45,
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        backgroundColor: theme.buttonColor,
        borderRadius: "50%", 
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginLeft: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: theme.wrongSign,
        width: "50%",
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    tabButton: {
        paddingVertical:10,
        paddingHorizontal:40,
        marginHorizontal: 10,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    modalButton: {
        backgroundColor: theme.buttonColor,
        width: "90%",
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
    },
    Icon: {
        color: theme.iconColor,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    addIcon: {
        color: "#3954B7",
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: "center",
    },
    folderIcon: {
        color: theme.folderColor,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: "flex-start",
    },
    tabIcon: {
        color: theme.textColor,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    folderName: {
        color: theme.textColor,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "600"
    }
});

export default styles;

