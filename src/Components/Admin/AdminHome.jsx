import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Admin</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/img/team-3.jpg" alt="" height="325px" width="100%" />
                            </div>
                            <div className="col-md-6">
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>Sagar Rana</td>
                                        </tr>
                                        <tr>
                                            <th>UserName</th>
                                            <td>sagar</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>pundir3170@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>9634871921</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
