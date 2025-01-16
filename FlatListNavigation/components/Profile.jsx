import{View} from 'react-native';
import{Text} from "react-native-paper";
import{Image} from "react-native";

export default function Profile({route}){
    const {student} = route.params;
    return(
        <View>
            <Text>Name:{student.name}</Text>
            <Text>Age:{student.age}</Text>
            <Text>Gender:{student.gender}</Text>
            <Text>courseName:{student.courseName}</Text>
            <Image source={student.profilePic}/>
        </View>
    );
}