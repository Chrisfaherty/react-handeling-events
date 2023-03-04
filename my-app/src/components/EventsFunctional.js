import React, { Component } from 'react'

function EventsFunctional(){
    function clickHandler(){
        console.log("Clicked the functional button")
    }

    return (
      <div>
        <button onClick={clickHandler}>Click me - functional component</button>
      </div>
    )
  }

export default EventsFunctional