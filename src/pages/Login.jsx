import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Login(){
    const navigation = useNavigation()
    return(
        <View style={styles.Container}>
            <Text>Opa</Text>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress={()=>(navigation.navigate('Cadastro'))}><Text>Login</Text></TouchableOpacity>   
        </View>
    );
}
const styles=StyleSheet.create({
    Container:{
        alignItems:'center', 
        justifyContent:'center',
        flex:1,
        
    },
    TouchableOpacity:{
        width:200,
        height:50,
        borderRadius:25,
        backgroundColor: "#FF0000",
        alignItems:"center",
        justifyContent:"center", 
        marginTop:20,
        
    },
});