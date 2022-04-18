import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class EditUser extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            department: '',
            admissionYear: '',
            redirect:false
        }
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    inputHandler= (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitButton = async () =>{

    }
    render() {
        const {name,department,admissionYear} = this.state;
 
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to='/home'/>;
        }
        return (
            <div className='container'>
                <div className='row login'>
                    <h3 className='heading' style={{ margin: '20px' }}>Edit Registration
                    </h3><br />
                    <div className='col-md-2'></div>
                    <div col-md-6>
                        <form action='/login-user' method='post' autoComplete='off'>
                            <div className='mb-3'>
                                <label className='form-label'>User Name</label>
                                <input type='text' className='form-control' name='name' value={name} onChange={this.inputHandler} />

                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Department</label>
                                <input type='text' className='form-control' name='department' value={department} onChange={this.inputHandler} />

                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Admission Year</label>
                                <input type='text' className='form-control' name='admissionYear' value={admissionYear} onChange={this.inputHandler} />

                            </div>
                            <div>
                                <button type='button' className='btn btn-primary' onClick={this.submitButton}>Edit user</button>&nbsp;
                                <Link to='/home'><button type='button' id='addUserBtn'
                                    className='btn btn-success'>back</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}
