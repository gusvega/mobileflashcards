import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';


function AddCardView() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Question</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Answer</Label>
              <Input />
            </Item>
            <Button title='Submit'/>
          </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
     width: 350,
  }
});

export default AddCardView