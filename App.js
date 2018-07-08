/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import {
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import API from './utils/api';
import CategoryList from './src/videos/containers/CategoryList';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state ={
    suggestionList:[],
    categoryList:[]
  }
 async componentDidMount(){
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList:movies,
      categoryList:categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>
            Extra title
            </Text>
        </Header>
     
      <Text>Header </Text>
      <Text>Buscador </Text>
      <Text>Categorias </Text>  
      <CategoryList
      list={this.state.categoryList}
      />
      <SuggestionList
      list={this.state.suggestionList}
      />
     
    </Home> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: 'red',
      android: 'green'
    }),
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
