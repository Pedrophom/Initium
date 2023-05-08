import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet} from 'react-native';

export function Cadastro(){
    const navigation = useNavigation()
    return(
<View style={styles.Container}>
    <Text>
Salve Salve aqui é a segunda tela 
    </Text>
</View>
    );
}
const styles=StyleSheet.create({
    Container:{
        alignItems:'center', 
        justifyContent:'center',
        flex:1,
        
    },
});