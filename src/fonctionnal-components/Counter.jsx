import React, { useState } from 'react'


export const CounterF = ({init = 10, titre}) => {
    const [counter, setCounter] = useState(init)
   function diminuer() {
        if(counter > 0){
            setCounter(counter -1)
        }
        
    }
    function augmenter() {
        setCounter(counter + 1)
    }
        return (
            <div className='flex justify-center mt-10'>
                <div className='w-1/2 bg-gray-800 text-white p-3'>
                    <p>{titre}</p>
                    <p className='text-5xl text-center p-4'> {counter} </p>
                    <div className='flex justify-around mt-7'>
                        <button
                        onClick={ diminuer}
                            className='bg-black p-3 shadow-sm shadow-white'
                        >Diminuer</button>

                        <button
                        onClick={ augmenter}
                            className='bg-black p-3 shadow-sm shadow-white'
                        >Augmenter</button>
                    </div>

                </div>

            </div>
        )
    
}
