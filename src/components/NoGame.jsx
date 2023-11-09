import React from 'react'
import { useContext } from 'react'
import { NewDatesContext } from '../contexts/Context'

function NoGame() {
    const { games } = useContext(NewDatesContext)
    

    if (games.length===0){
  return (
    <div className="no-game">NoGame</div>
  )
    }
}

export default NoGame