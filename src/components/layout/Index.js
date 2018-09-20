import React from 'react'
import Tunes from '../tunes/Tunes';
import Search from '../tunes/Search';


const Index = () => {
  return (
    <React.Fragment>
      <Search />
        <Tunes />
    </React.Fragment>
  );
};


export default Index;