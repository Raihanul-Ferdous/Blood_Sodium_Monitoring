import React, { Component } from 'react';
import './Result.css'
import axios from 'axios'
//import DoctorListData from '.../Data/DoctorListData.json'



class Result extends Component {

  constructor(props){
    super(props)
     this.state = {
    ResultListData : []
    }
    console.log(props);
  }


   componentDidMount(){
    this.getResultListData()
  }

  getResultListData(){


    var id = this.props.user_id;
//http://127.0.0.1:8000/api/readinglist/?user__id=
   // var API = 'http://0.0.0.0:8000/api/doctorsearch/?speciality='+doctor+'&profile__address__district='+loc
    axios.get('http://127.0.0.1:8000/api/readinglist/?ordering=-id&user__id='+id)
    .then(res => {
      this.setState({ResultListData: res.data})
      console.log(res.data)

    })
    .catch(err => {
      console.log(err)
   })


  }




  render() {
    return (
      <div className="ResultList-box " >
        <div className="Scroll">
          {this.state.ResultListData.map((result, index) => {
            return (
              <div className="row">

                <div className="Margin">

                  <h4>Level: {result.level}</h4>
                  <h4>Absorbance: {result.intensity}</h4>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Result;
