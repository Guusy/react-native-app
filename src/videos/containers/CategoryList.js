import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator'
import Category from '../components/Category';
import CategoryListLayout from '../components/CategoryListLayout';
class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias !" />
  itemSeparator = () => <Separator />
  renderItem = ({ item }) => <Category {...item} />
  keyExtractor = item => item.id.toString()
  render() {
    return (
      <View>
        <CategoryListLayout
        title="Categorias"
        >
        
        
      <FlatList
          horizontal={true}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}


        />
</CategoryListLayout>
      </View>
    )
  }
}


export default CategoryList