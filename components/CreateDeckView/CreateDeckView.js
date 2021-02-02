import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Form, Item, Label, Input } from "native-base";


function CreateDeckView() {
   return (
      <Container>
         <Content padder>
            <Card>
               <CardItem header button onPress={() => alert("This is Card Header")}>
                  <Form style={styles.form}>
                     <Item fixedLabel>
                        <Label>Deck Name:</Label>
                        <Input />
                     </Item>
                  </Form>
               </CardItem>
               <CardItem footer button onPress={() => alert("This is Card Footer")}>
                  <Button title='Create Deck'/>
               </CardItem>
            </Card>
         </Content>
      </Container>
   );

}

const styles = StyleSheet.create({
   form: {
      width: 350,
   }
});

export default CreateDeckView