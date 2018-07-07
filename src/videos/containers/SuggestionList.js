import React, { Component } from 'react';
import {
 FlatList,
 Text
} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion';
class SuggestionList extends Component {
  renderEmpty = ()=> <Empty text="No hay sugerencias !"/>
  itemSeparator = ()=> <Separator />
  renderItem = ({item}) => <Suggestion {...item} />
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
      renderItem={this.renderItem}
   
      
      />

      </SuggestionListLayout>

    )
  }
}


export default SuggestionList