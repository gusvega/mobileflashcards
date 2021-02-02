import React from 'react'
import {View, Text, Button} from 'react-native'

function ScoreView({navigation}) {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>10/10 Correct</Text>
       <Text>Start New Quiz</Text>
       <Button title='Home' onPress={() => navigation.navigate('MainView')}/>
     </View>
   );
 
}

export default ScoreView