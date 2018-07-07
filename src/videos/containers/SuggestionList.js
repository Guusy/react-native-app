import React, { Component } from 'react';
import {
 FlatList,
 Text
} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
class SuggestionList extends Component {
  renderEmpty = ()=> <Empty text="No hay sugerencias !"/>
  itemSeparator = ()=> <Separator />
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
      ListEmptyComponent={this.renderEmpty}
      ItemSeparatorComponent={this.itemSeparator}
      renderItem={ ({item}) => <Text>{item.title}</Text>}
   
      
      />

      </SuggestionListLayout>

    )
  }
}


export default SuggestionList