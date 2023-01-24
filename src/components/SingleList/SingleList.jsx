import React from 'react'
import { useState } from 'react'
import './singleList.css';

function SingleList({userz}) {
 
    console.log(userz);
const [show, setShow] = useState("");


return (
    <>
    <div className='container'>
    <div className='main'>
    <div className='company'><p >{userz.company.name}</p></div>
              <div>
                <h4>Contact</h4>
                <p>{userz.name}</p>
             </div>
             <div>
                <h4>Website</h4>
                <p>{userz.website}</p>
             </div>
             <div>
                <h4>City</h4>
                <p>{userz.address.city}</p>
             </div>
        <button onClick={() => setShow(!show)}>{show === true? 'hide details' : 'view details'}</button>
    </div>
      {show && <div className='secondary'>
         <div className='desc'>
            <h4>Description</h4>
            <p>{userz.company.catchPhrase}</p>
         </div>
         <div className='card'>
            <section className='person'>
                <div>
                   <h4>Contact person</h4>
                   <p>{userz.username}</p>
                </div>
                <div>
                   <h4>email</h4>
                   <p>{userz.email}</p>
                </div>
                <div>
                   <h4>phone</h4>
                   <p>{userz.phone}</p>
                </div>
            </section>
            <section className='address'>
            <div>
                   <h4>Address</h4>
                   <p>{userz.address.suite}, {userz.address.street}</p>
                </div>
                <div>
                   <h4>city</h4>
                   <p>{userz.address.city}</p>
                </div>
                <div>
                   <h4>zipcode</h4>
                   <p>{userz.address.zipcode}</p>
                </div>
            </section>
         </div>
      </div>}
    </div>
    </>
  )
}

export default SingleList