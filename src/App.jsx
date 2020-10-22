import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Input } from 'react-onsenui';

import Item from './Item.jsx';

export default class App extends React.Component {

  

  constructor(props){
    super(props);


    this.state = {

      inputText: "",  //入力テキスト
      time: new Date(),
      items: []       //Itemの要素を記憶しておくための配列
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    var d = new Date();
    var newitems = this.state.items;
    newitems.push({ text: this.state.inputText + this.state.time });  //入力テキストをitem配列に追加
    this.setState({ inputText: "",time: d, items: newitems});  //this.stateを更新
  }

  render() {
    return (
      <Page>
        <Input value={this.state.inputText}
          onChange={(event) => { this.setState({ inputText: event.target.value,  items: this.state.items }) }}
          modifier="material" />
        <Button onClick={this.addItem}>追加</Button>

        {this.state.items.map(item => {
          return <Item text={item.text}></Item>
        })}
      </Page>
    );
  }
}