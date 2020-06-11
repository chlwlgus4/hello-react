import React, {Fragment, Component, useState} from 'react';
import MyComponent from './MyComponent';
import './App.css';
import logo from './logo.svg'
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
import ScrollBox from './ScrollBox';
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
// import Info from "./Info";
// import Average from './Average';


// function App() {

// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// const App = () => {
// // class App extends Component {
//     // const name = '리액트';
//     // const style = {
//     //     backgroundColor: 'black',
//     //     color          : 'aqua',
//     //     fontSize       : '48px',
//     //     fontWeight     : 'bold',
//     //     padding        : 16
//     // };
//     // state = {
//     //     color: '#000000'
//     // }
//     //
//     // handleClick = () => {
//     //     this.setState({
//     //         color: getRandomColor()
//     //     })
//     // }
//     const [visible, setVisible] = useState(false);
//     // render() {
//         const name = '리액트';
//         const style = {
//             backgroundColor: 'black',
//             color          : 'aqua',
//             fontSize       : '48px',
//             fontWeight     : 'bold',
//             padding        : 16
//         };
//         return (
//             <Fragment>
//                 <button onClick={() => {
//                 setVisible(!visible);
//                 }}>
//                     {visible ? '숨기기':'보이기'}
//                 </button>
//                 <hr />
//                 {visible && <div>
//                 <div style={style}>{name}</div>
//                 <div className="react">{name}</div>
//                 {/*<MyComponent name={'React'}*/}
//                 {/*             favoriteNumber={1}*/}
//                 {/*             ref={(ref) => {*/}
//                 {/*                 this.myComponent = ref*/}
//                 {/*             }}*/}
//                 {/*>리액트</MyComponent>*/}
//                 <Counter/>
//                 <Say/>
//                 <EventPractice/>
//                 <ValidationSample/>
//                 {/*<ScrollBox ref={(ref) => this.scrollBox = ref}/>*/}
//                 {/*<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}
//                 <IterationSample/>
//                 {/*<button onClick={this.handleClick}>랜덤 색상</button>*/}
//                 {/*<ErrorBoundary>*/}
//                 {/*    <LifeCycleSample color={this.state.color}/>*/}
//                 {/*</ErrorBoundary>*/}
//
//                 </div>}
//                 <Info />
//                 <Average/>
//             </Fragment>
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <header>
                    <img src={'logo'} className={'logo'} alt={'logo'}/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className={'App-link'} href={'https://reactjs.org'} target={'_blank'} rel={'noopener noreferrer'}>Learn
                        React</a>
                </header>
            </div>
        )
    }

}

export default App;
