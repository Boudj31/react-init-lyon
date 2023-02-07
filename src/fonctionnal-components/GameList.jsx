import React from 'react'
import GameCard from './GameCard'

const GameList = ({games}) => {
  return (
    <div className='my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4 py-10'>
        {
          games.length && games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))
        }
       

      </div>
  )
}

export default GameList
