import React, { Component, useEffect, useState } from 'react'


// USEEFFECT// c'est un Hook qui va permettre la syncronisation d'un composant avec un systeme externe

// il va s'excuter à chaque qu'un composant est rendu

const ClockF = () => {
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second => second + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

//     // Ce code il va s'executer une seule fois 
//     useEffect(
//          () =>  { 
//              // alternative componentDidMount
//              console.log("useEffect")
//          }
//     , [])

//      // Ce code il va s'executer à l'infini
//      useEffect(
//         () =>  { 
//             console.log("useEffect")
//         }
//    ,)

//     // Ce code il va s'executer à l'infini
//     useEffect(
//         () =>  { 
//              // alternative componentDidUpdate
//             console.log("useEffect")
//         }
//    ,[second])

//    useEffect(
//     () =>  { 
//         // alternative componentWillUnmount
//         console.log("useEffect")

//         // 
//         return () => {

//         }
//     }
// , [])





  return (
    <p className='bg-gray-700 p-4 text-xl text-center mt-5'>
    {second} secondes se sont écoulées
  </p>
  )
}

export default ClockF


/*
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
*/
