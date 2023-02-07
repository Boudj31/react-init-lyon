import React, { Component , Fragment, useState} from 'react'

export const FormF = () =>  {
  const [message, setMessage] = useState("void");
  const [fName, setFName] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");

      const handleSubmit = (event) => {
          event.preventDefault()
          if(lName != '' && fName != ''){
            setMessage("success")
          } else {
            setMessage("error")
          }
      }

      
    return (
        <>
         { message == 'success' &&
        <p className='bg-emerald-200 p-4 text-black text-center text-xl'>Hello {fName} {lName} </p>
      }

    { message == 'void' &&
        <p className='bg-white p-4 text-black text-center text-xl'>Bienvenue</p>
      }

      {   message == 'error' &&
        <p className='bg-red-200 p-4 text-black text-center text-xl'>Les champs nom et prénom sont obligatoires !</p>
      }



          <div className='flex justify-center'>
    <form className='bg-black w-2/3 p-6'>
        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Nom</label>
            <input
                value={lName}
                onChange={(event) => setLname(event.target.value)}
                className='p-5 w-full bg-gray-900'
                type='text'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Prénom</label>
            <input
                 value={fName}
                 onChange={(event) => setFName(event.target.value)}
                className='p-5 w-full bg-gray-900'
                type='text'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='my-4'>
            <label className='mb-3 text-lg font-bold'>Email</label>
            <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
                className='p-5 w-full bg-gray-900'
                type='email'
                placeholder='Tapez votre texte ici' />
        </div>

        <div className='flex justify-center'>


            <button
            onClick={handleSubmit}
                className='bg-red-700 p-5'
                type='submit'>S'inscrire</button>
        </div>
    </form>
</div>

        </>
      
    )
  
}
