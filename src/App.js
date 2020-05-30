import React, {Fragment} from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
    const name = '리액트';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize:'48px',
      fontWeight:'bold',
      padding:16
    };
    return (
        <Fragment>
            <div style={style}>{name}</div>
            <div className="react">{name}</div>
            <MyComponent name={'React'} favoriteNumber={1}>리액트</MyComponent>
        </Fragment>
    );
}

export default App;
