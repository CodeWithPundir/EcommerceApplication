import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

export default function Maincategory() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
