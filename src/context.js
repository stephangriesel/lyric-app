import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    tunes_list: [
      { tune: {tune_name:'tune name'}},
      { tune: {tune_name:'tune name'}}
    ],
    heading: 'Top 10 Tunes'
  };
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
