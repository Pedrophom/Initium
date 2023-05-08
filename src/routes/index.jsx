import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Login} from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'

const {Navigator, Screen} = createNativeStackNavigator();
export function Routes(){
    return(
<NavigationContainer>
    <Navigator>
        <Screen name='Login' component={Login}/>
        <Screen name='Cadastro' component={Cadastro} />
        
    </Navigator>
</NavigationContainer>
    );
}
