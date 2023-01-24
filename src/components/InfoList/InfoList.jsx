import React from 'react'
import { useState } from 'react'
import SingleList from '../SingleList/SingleList'

function InfoList({info}) {
 
 

   console.log(info);

  return (
    <div>
        {info.map((user, index) => {
        return <SingleList key={user.id} userz={user}/>
      })}
    </div> 
  )
}

export default InfoList