import React, { Component } from 'react'
import './Home.css';
import axios from 'axios'

//const REGISTER_URL = '0.0.0.0:8000/api/login/'
const REGISTER_URL='http://127.0.0.1:8000/api/reading/'

const initiaState = {

  level: null,
  intensity: null

	}

class Home extends Component {

  constructor(props){
    super(props)
    this.myData = React.createRef()
    this.state={
      ...initiaState
    }
  }
  changeHandler = (event) => {


      this.setState({
        [event.target.name]: event.target.value
      })

  }

viewReportClick = (event) =>{
  var data ={
    name: this.props.name,
    user_id: this.props.user_id
  }
  this.props.resultViewHandler(data)
}
  uplodData = (event) =>{
    const {
      level,
      intensity
    } = this.state;
    const postData ={
      level : level,
      intensity : intensity,
      user : this.props.user_id
    }
    event.preventDefault()
    this.myData.current.reset()
    console.log(postData)
    axios.post(REGISTER_URL,postData)
    .then(res =>{
      console.log(res+"  yo yo....")

    })
    .catch(error =>{
      console.log("ERROR::: "+error)
    })


    this.setState({
      ...initiaState
    });

  }


    render(){
      console.log(this.props.user_id)
        return(
            <div className="Home-box">
              <form ref = {this.myData} >
                <div>
                  <h2 className="Rezve">{this.props.name}</h2>
                  <button className="Rezve"
                    onClick = {this.viewReportClick}
                  >Check Report</button>
                </div>
                <div className="Rezve">
                   <p>Level:
                     <input type="text"
                     name = "level"
                     id = "level"
                     value = {this.state.level}
                     onChange = {this.changeHandler}
                     />
                   </p>
                   <p>Absorbance:
                    <input type="text"
                    name = "intensity"
                    id = "intensity"
                    value = {this.state.intensity}
                    onChange = {this.changeHandler}
                    />
                   </p>
                  <a href="#" id="login-btn" onClick={this.uplodData}> <button>Upload Result</button> </a>
                </div>
                </form>
            </div>
        );
    }
}

  export default Home;
