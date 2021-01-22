import React, { Component } from "react"
import Clock from './Clock';
import './App.css'; 
class App extends Component {
 constructor(props) {
     super(props);
     this.state = {
         
        deadline: ' December 24, 2021',
        newDeadline:''                       //de aici am adaugat o noua dead line
    }
 }
 changeDeadline(){
     this.setState({deadline: this.state.newDeadline}); //de aici putem introduce orice luna sau an 
 }
render(){
return(
   
    <div className='App'>


         <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
      
           <div className= 'App-tittle'><h1>Countdown to {this.state.deadline}</h1></div>

     <div>

         <Clock 
           deadline = {this.state.deadline}
         
         />
     </div>
        
    <div>
       <input 
       
        placeholder = 'new date '
        onChange={event => this.setState({newDeadline: event.target.value})}//de aici am i-am dat sa dea o data noua
        
        />
        <button onClick={() => this.changeDeadline()}>

            Subimt
            
            </button>

           
        
    </div>
    </div>
    
   
    )

}


}

export default App
