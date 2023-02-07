import React, { Component } from 'react'

export default class GameCard extends Component {
    constructor() {
        super()
        this.changeStatus = this.changeStatus.bind(this);
       
    };
    truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    changeStatus = () => {
            this.setState( { game : this.props.game.isPlayed = !this.props.game.isPlayed} );
        }

    
  render() {
    console.log("render card")
   
    return (
        <div
         onClick={this.changeStatus}
         className={this.props.game.isPlayed ? "max-w-sm rounded overflow-hidden shadow-lg bg-black" : "max-w-sm rounded overflow-hidden shadow-lg bg-gray-800"}>
        <img className="w-full" src={this.props.game.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.props.game.name}</div>
          <p className="text-cyan-300 text-base">
          {this.truncate(this.props.game.description, 150)
          }
          </p>
          <p className="text-white my-2">
            Sortie en {this.props.game.yearReleased} sur {this.props.game.console}
          </p>
        </div>

      </div>
    )
  }
}
