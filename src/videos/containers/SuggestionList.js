import React, { Component } from 'react';
import {
 FlatList,
 Text
} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
class SuggestionList extends Component {

  render(){
    const list = [
      {
        title:'Pepe',
        key:'1'
      },
      {
        title:'Rodrigo',
        key:'2'
      }
    ]
    return(

      <SuggestionListLayout
      title="Sugerencias para ti"
      >
      <FlatList
      data={list}
      renderItem={ ({item}) => <Text>{item.title}</Text>}
   
      
      />

      </SuggestionListLayout>

    )
  }
}


export default SuggestionList