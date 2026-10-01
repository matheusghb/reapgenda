import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const s = StyleSheet.create({

  container: {
    backgroundColor: '#b9b9b9',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingVertical: '5%',
  },
  title: {

    fontSize: 40,
    color: '#252525',
    fontWeight: 800,
    flex: 1,

  },
  lista: {

    backgroundColor: '#ffffff',
    width: '90%',
    flex: 10,
    overflow: 'scroll',
    padding: '5%',
    borderRadius: 8,
    boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.3)'
  }

})

class App extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      valor:'REAP'
    }
  this.mudanome = this.mudanome.bind(this)
  }

  mudanome() {

    this.setState({valor: 'REAPOOP'})

  }

  render() {
    return(
      
      <View style={s.container}>
        <Text style={s.title}>{this.state.valor}</Text>
        <View style={s.lista}>
          <Text>testetesteteste</Text>
          <Text>Esse é o teste final</Text>
          <Pressable style={{backgroundColor: 'blue'}} onPress={this.mudanome}>Me clique</Pressable>
        </View>
      </View>
    )
  }
}
export default App