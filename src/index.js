import React from 'react';
import ReactDOM from 'react-dom';
import Common from './Common';
import Card from './Card';
// import './index.css';


  const App = () => {
    return (
      <div className="ui container comments"> 
      <Card><Common author= "Sam" timeago = "05:00AM" content = " I like Writing"  />  </Card> 
      <Card><Common author = "Alex" timeago = "02:00PM" content =" I like this Subject "/></Card>
       <Card><Common  author = "Elie" timeago = "09:00AM" content = "Nice Blog Post" /></Card>


      </div>
    );
     
  };


  // const btn = { text : 'ClickME'};
  // const LabelText = 'EnterText:';
  //  const btn = "Submit";// another way to declare button
  // return (
  //   <div>
  //     <label className="label" HtmlFor="name">{LabelText}</label>
  //     <input/>
  //     <button style= {{backgroundColor:'blue',color:'white',margin:'8px'}}>{btn.text}</button>
  //   </div>
  // )

ReactDOM.render(<App />,document.getElementById('foot'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
