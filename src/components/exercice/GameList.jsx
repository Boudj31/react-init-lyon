import React, { Component } from 'react'
import GameCard from './GameCard'

export default class GameList extends Component {
  render() {
    return (
      <div className='my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4 py-10'>
        {
          this.props.games.map((game) => (
            <GameCard game={game} key={game.id} />

          ))
        }
       

      </div>
    )
  }
}
