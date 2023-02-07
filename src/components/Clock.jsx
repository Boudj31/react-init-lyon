import React, { Component } from 'react'
import { FormattedDate, FormattedTime } from './FormatedDate';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = { date: new Date() }
        console.log("clock constructor");
    }

    componentDidMount() {
        console.log("componentDidMount")
        document.title = "il est " + this.state.date.toLocaleTimeString('fr-FR')
        this.id = setInterval(() => {
            this.tick()
        }, 1000)

    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
        document.title = `il est ${this.state.date.toLocaleTimeString('fr-FR')}`;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.id)
    }

    tick() {
        const date = new Date();
        this.setState({date}) // date : date 
    }

  render() {
    console.log("clock render");
    return (
      <p 
      className='bg-gray-700 p-3 text-white my-5'>
          Nous sommes: <FormattedDate date={this.state.date}  />
          et il est <FormattedTime date={this.state.date} />

  </p>
    )
  }
}
