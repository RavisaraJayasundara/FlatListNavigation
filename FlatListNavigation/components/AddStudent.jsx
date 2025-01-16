import{View} from 'react-native';
import{Text,TextInput,Button}  from "react-native-paper";
import{Image} from "react-native";
import {useState} from "react";
import { useNavigation } from '@react-navigation/native';

export default function AddStudent(){
    const[name,setName]=useState();
    const navigation = useNavigation();
    const newStudent={
        name:name,
        id:"123d",
        age:23
    }
     return(
        <View>
            <TextInput  mode="outlined" label="Name" value={name} onChangeText={setName}/>

            <Button onPress={()=>{
                navigation.popTo('StudentList',{newStudent});
            }}>
                ADD</Button>
        </View>
     );

}