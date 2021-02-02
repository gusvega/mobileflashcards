import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Card, CardItem, Body } from 'native-base';


function QuizView({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title='Correct'/>
    <Button title='Wrong'/>
      <Card style={styles.card} >
        <TouchableOpacity >
          <CardItem >
            <Body>
              <Text>
                Question
              </Text>
            </Body>
          </CardItem>
        </TouchableOpacity>
      </Card>
      <Button title='Score' onPress={() => navigation.navigate('ScoreView')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
     width: 350,
     height: 70
  }
});

export default QuizView