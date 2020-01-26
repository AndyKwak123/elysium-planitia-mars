import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {MeteorRainLoading} from 'react-loadingg';
import space from './earth.png';
import Weather from './components/weather.js';



function Home() {

  //declare state variables, useState takes two parameters--> initial state value and function to 
  //manipulate the initial state value 
  const[loading, isLoading ] = useState('true');
  //post render and runs after every update to component 
  useEffect(()=> { 
    //make api call after delay for animation

    setTimeout(() => {fetch ('https://api.nasa.gov/planetary/apod?api_key=bY15mk1n7EWfQffSIbbCFSN4PKJgeBlZRlHXEPOd')
        //format to json 
        .then(res => res.json())
        //change state value 
        .then(data => isLoading('false'))
        .catch(console.log)
      }, 4000);


  }, []);
  if(loading == 'true'){
    return <div class ='bg'>
      <img src={require('./blue.jpg')}/>
      <MeteorRainLoading/>
    </div>
    } else {
      return(
        <div>
          <Child/> 
          <Weather/>
        </div>
    );
  }
}


function Child() {
  return (
   <div id ="child">
     <div class="heading">
     <h1> somewhere in Elysium Planitia, Mars..</h1>
   </div>
     <img src={ require('./img/home.jpg') } />
   </div>
    )
}
export default Home;
