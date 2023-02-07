import React, { Component , Fragment} from 'react'

export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            message: 'void',
            fName: '',
            lName: '',
            email :''
        }

      }

      handleSubmit = (event) => {
          event.preventDefault()
          if(this.state.lName != '' && this.state.fName != ''){
            this.setState({message : "success"})
          } else {
            this.setState({message : "error"})
          }
      }
  render() {
      
    return (
        <>
         { this.state.message == 'success' &&
        <p className='bg-emerald-200 p-4 text-black text-center text-xl'>Hello {this.state.fName} {this.state.lName} </p>
      }

    { this.state.message == 'void' &&
        <p className='bg-white p-4 text-black text-center text-xl'>Bienvenue</p>
      }

      {   this.state.message == 'error' &&
        <p className='bg-red-200 p-4 text-black text-center text-xl'>Les champs nom et prénom sont obligatoires !</p>
      }



          <div className='flex justify-center'>
    <form className='bg-black w-2/3 p-6'>
        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Nom</label>
            <input
                value={this.state.lName}
                onChange={(event) => this.setState({lName : event.target.value })}
                className='p-5 w-full bg-gray-900'
                type='text'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Prénom</label>
            <input
                 value={this.state.fName}
                 onChange={(event) => this.setState({fName : event.target.value })}
                className='p-5 w-full bg-gray-900'
                type='text'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Email</label>
            <input
            value={this.state.email}
            onChange={(event) => this.setState({email : event.target.value })}
                className='p-5 w-full bg-gray-900'
                type='email'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='flex justify-center'>


            <button
            onClick={this.handleSubmit}
                className='bg-red-700 p-5'
                type='submit'>S'inscrire</button>
        </div>
    </form>
</div>

        </>
      
    )
  }
}
