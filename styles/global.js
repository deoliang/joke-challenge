import { StyleSheet } from 'react-native';

//defining a global stylesheet
export const global = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    screenText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#20315f"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#EAEEFF',
        marginVertical: 60,
        marginHorizontal: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#906F8B',
    },
})