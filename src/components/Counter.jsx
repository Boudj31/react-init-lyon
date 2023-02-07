import React, { Component } from 'react'

export default class Counter extends Component {

    static defaultProps = {init : 10}
    
    constructor(props) {
        super(props)
        this.state = {
            counter : this.props.init
        }
   // Les méthodes augmenter et diminuer sont liées à this à l'aide de bind pour s'assurer que le contexte correspond au composant
        this.augmenter = this.augmenter.bind(this);
        this.diminuer = this.diminuer.bind(this);
    }

    diminuer() {
        if(this.state.counter > 0){
            this.setState( { counter : this.state.counter -1 } );
        }
        
    }

    augmenter() {
        this.setState( { counter : this.state.counter + 1 } );
    }

    render() {

        const {counter} = this.state

        return (
            <div className='flex justify-center mt-10'>
                <div className='w-1/2 bg-gray-800 text-white p-3'>
                    <p className='text-5xl text-center p-4'> {counter} </p>
                    <div className='flex justify-around mt-7'>
                        <button
                        onClick={ this.diminuer}
                            className='bg-black p-3 shadow-sm shadow-white'
                        >Diminuer</button>

                        <button
                        onClick={ this.augmenter}
                            className='bg-black p-3 shadow-sm shadow-white'
                        >Augmenter</button>
                    </div>

                </div>

            </div>
        )
    }
}
