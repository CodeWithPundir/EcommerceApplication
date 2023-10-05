import React, { useRef } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'



export default function CreateMaincategory() {
    let name = useRef("")
    let navigate = useNavigate()
    function getInputData(e){
        name.current = e.target.value
    }
    async function postData(e){
        e.preventDefault()
        
        navigate("/admin/maincategory")
    }
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Maincategory</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name='name' required minLength={3} maxLength={50} onChange={getInputData} className='form-control' placeholder='Name'/>
                            </div>
                            <div className="mb-3">
                                <button type='button' className='btn btn-success w-50' onClick={()=>window.history.back()}>Back</button>
                                <button type="submit" className='btn btn-primary w-50'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
