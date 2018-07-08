import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion';

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias !" />
  itemSeparator = () => <Separator />
  renderItem = ({ item }) => <Suggestion {...item} />
  keyExtractor = item => item.id.toString()
  render() {
    return (
      <View>
      <FlatList
          horizontal={true}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}


        />

      </View>
    )
  }
}


export default CategoryList