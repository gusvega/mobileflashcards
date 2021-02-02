import React from 'react'
import {View, Text, Button} from 'react-native'

function ScoreView({navigation}) {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>10/10 Correct</Text>
       <Button title='Start New Quiz'></Button>
       <Button title='Home' onPress={() => navigation.navigate('Home')}/>
     </View>
   );
 
}

export default ScoreView