import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="list-group">
            <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true"><i className='fa fa-home'></i><span className='float-end'>Home</span></Link>
            <Link to="/admin/users" className="list-group-item list-group-item-action"><i className='fa fa-users'></i><span className='float-end'>User</span></Link>
            <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end'>Maincategory</span></Link>
            <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end'>Subcategory</span></Link>
            <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end'>Brand</span></Link>
            <Link to="/admin/product" className="list-group-item list-group-item-action"><i className='fa fa-list '></i><span className='float-end'>Product</span></Link>
            <Link to="/admin/newslatter" className="list-group-item list-group-item-action"><i className='fa fa-envelope'></i><span className='float-end'>Newslatter</span></Link>
            <Link to="/admin/contactus" className="list-group-item list-group-item-action"><i className='fa fa-phone'></i><span className='float-end'>ContactUs</span></Link>
            <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className='fa fa-shopping-cart'></i><span className='float-end'>Checkout</span></Link>
        </div>
    )
}
