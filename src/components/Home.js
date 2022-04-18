import React from 'react'
import List from './List'
 
export default function Home() {
    const userList = [{id:1,name:'anik',department:'cse',admissionYear:'spring 2015'}];
  return (
    <div className='container'>
        <div className='row login homepage'>
            <div>&nbsp;</div>
            <div className='row'>
                <div className='col-md-1'>

                </div>
                <div className='col-md-11'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Admission Year</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((userData)=>(
                                <List user={userData} key={userData.id}></List>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
