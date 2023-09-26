import logo from './logo.svg';
import './App.css';
import {
  ItemCardCollection 
 } from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react"; //ここを追加
import { DynamoDB } from "./DynamoDB"; //ここを追加


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCardCollection />
         {/* 下記を変更 */}
         <DynamoDB />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
      
    </div>
  );
}

export default withAuthenticator(App); //ここを変更
