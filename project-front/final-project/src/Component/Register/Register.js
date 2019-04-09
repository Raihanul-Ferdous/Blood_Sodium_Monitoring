
import React, { Component } from 'react'
import './Register.css';
import axios from 'axios'

const REGISTER_URL = 'http://127.0.0.1:8000/api/register/' // received api ulr...

const initiaState = {

		first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        age: '',
        phone: '',
        sex: ''

	}

class Register extends Component{


	constructor(props){
		super(props)

		this.myRegister = React.createRef()


		this.state = {
		...initiaState
	}

	}




	changeHandler = (event) => {


			this.setState({
	    	[event.target.name]: event.target.value
	    })

	}

	submitHandler = (event) =>{
		const {
			first_name,
            last_name,
            username,
            email,
            password,
            password_confirmation,
            age,
            phone,
            sex,
		} = this.state;
     console.log(this.state)
		const postData = {

            first_name : first_name,
            last_name : last_name,
			username : username,
			email : email,
			password : password,
			password_confirmation : password_confirmation,
      age: age,
      phone: phone,
      sex: sex,
		};
		event.preventDefault()
		console.log(this.state)
		this.myRegister.current.reset()
		console.log(postData);
		axios.post(REGISTER_URL,postData)
		.then(res =>{
			console.log(res+"  yo yo....")
			this.props.loginHandle()
		})
		.catch(error =>{
			console.log("ERROR::: "+error)
		})


		this.setState({
			...initiaState
		});


	}



	render(){

		return(


			<div className="Register-box">

			<form ref = {this.myRegister} className="Form" onSubmit={this.submitHandler }>
			    <div className ="form-group ">
                  <label htmlFor="first_name" >First Name: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  First Name '
                   name = "first_name"
                   id = "first_name"
                   value = {this.state.first_name}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group ">
                  <label htmlFor="last_name" >Last Name: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  Last Name '
                   name = "last_name"
                   id = "last_name"
                   value = {this.state.last_name}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group ">
                  <label htmlFor="username" >User Name:</label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  User Name '
                   name = "username"
                   id = "username"
                   value = {this.state.username}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="email" > Email: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  Enter Your Email '
                   name = "email"
                   id = "email"
                   value = {this.state.email}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="password" className="mr-4"> Password: </label>
                   <input
                   className = "from-control ml-2"
                   type="password"
                   placeholder = '  Enter Your Password '
                   name = "password"
                   id = "password"
                   value = {this.state.password}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="password_confirmation" className="mr-4"> Password Confirmation: </label>
                   <input
                   className = "from-control ml-2"
                   type="password"
                   placeholder = '  Password Confirmation'
                   name = "password_confirmation"
                   id = "password_confirmation"
                   value = {this.state.password_confirmation}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="phone" className="mr-4"> Phone </label>
                   <input
                   className = "from-control ml-2"
                   type="tel"
                   placeholder = ''
                   name = "phone"
                   id = "phone"
                   value = {this.state.phone}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="age" className="mr-4"> Age </label>
                   <input
                   className = "from-control ml-2"
                   type="number"
                   placeholder = ''
                   name = "age"
                   id = "age"
                   value = {this.state.age}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="sex" className="mr-4"> Sex </label>
                   <input
                   className = "from-control ml-2"
                   type="text"
                   placeholder = ''
                   name = "sex"
                   id = "sex"
                   value = {this.state.sex}
                   onChange = {this.changeHandler}
                   />
                </div>

                <button className = "btn btn-primary" type="submit" value="Submit"> Submit </button>
            </form>

			</div>


		);

	}
}

export default Register;
