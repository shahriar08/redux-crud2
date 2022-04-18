import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {

    const [inputField, setInputField] = useState({
        name: '',
        department: '',
        admissionYear: '',
    })

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = async () => {

    }
    return (
        <div className='container'>
            <div className='row login'>
                <h3 className='heading' style={{ margin: '20px' }}>Add Registration
                </h3><br />
                <div className='col-md-2'></div>
                <div col-md-6>
                    <form action='/login-user' method='post' autoComplete='off'>
                        <div className='mb-3'>
                            <label className='form-label'>User Name</label>
                            <input type='test' className='form-control' name='name' value={inputField.name} onChange={inputHandler} />

                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Department</label>
                            <input type='test' className='form-control' name='department' value={inputField.department} onChange={inputHandler} />

                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Admission Year</label>
                            <input type='test' className='form-control' name='admissionYear' value={inputField.admissionYear} onChange={inputHandler} />

                        </div>
                        <div>
                            <button type='button' className='btn btn-primary' onClick={submitButton}>Add user</button>&nbsp;
                            <Link to='/home'><button type='button' id='addUserBtn'
                                className='btn btn-success'>back</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
