import { View, Text, StyleSheet } from 'react-native';  
import globalStyles from '@/assets/globalStyles';


type ButtonType = {
    rank: string;
    text: string;
}

const Button = ({ rank, text }: ButtonType) => {
    const buttonStyle = rank === 'primary' ? buttonStyles.primary : buttonStyles.secondary;

    return (
        <View style={[buttonStyle, globalStyles.flex_centered, {cursor:"pointer"}]}>
            <Text style={[globalStyles.text_zinc_100, globalStyles.text_base]}>{text}</Text>  
        </View>
    );
}

const buttonStyles = StyleSheet.create({
    primary: {
        backgroundColor: "#f43f5e", 
        padding: 10,
        borderRadius: 5
    },
    secondary: {
        backgroundColor: "#374151", 
        padding: 10,    
        borderRadius: 5
    }
});

export default Button;
