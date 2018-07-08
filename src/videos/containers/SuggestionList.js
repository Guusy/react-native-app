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
  renderEmpty = () => <Empty text="No hay sugerencias !" />
  itemSeparator = () => <Separator />
  renderItem = ({ item }) => <Suggestion {...item} />
  keyExtractor = item => item.id.toString()
  render() {
    return (

      <SuggestionListLayout
        title="Sugerencias para ti"
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}


        />

      </SuggestionListLayout>

    )
  }
}


export default SuggestionList