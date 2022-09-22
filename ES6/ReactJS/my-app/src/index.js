import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {C1, C2} from './App';
import Header from './Header';
import Body from './Body';
import Post from './NewPost';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import Button from './ClassComponent';
import Clock from './TimeComponent';
import Login from './Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
const timeRoot = ReactDOM.createRoot(document.getElementById('clockRoot'));
timeRoot.render(
  <React.StrictMode>
    <Clock time={new Date()}/>
  </React.StrictMode>
)
root.render(
  <React.StrictMode>
    <Header />
    <Login id="1" text="admin"/>
    <Footer />
  </React.StrictMode>
);

function tick(){
  timeRoot.render(<Clock time={new Date()}/>)
}

setInterval(tick,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
