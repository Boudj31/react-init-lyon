import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import Counter from './components/Counter';
import Mapping from './components/Mapping';
import Form from './components/Form';
import Clock from './components/Clock';
import GameList from './components/exercice/GameList';
import { CounterF } from './fonctionnal-components/Counter';

// HOOKS
// useState // permettre d'encapsuler un etat dans ma fonction
// useEffect 


const App = () => {

  const [name, setName] = useState("Rachid") // desctructuration [value, setValue]
  const [age, setAge] = useState(25) 
  const [isLogged, setIsLogged] = useState(true)
  const [background, setBackground] = useState("bg-white text-gray-900 p-4 mt-2")


  const changeName = () => {
    setName("Yanis")
  }

  const login = () => {
    setIsLogged(!isLogged)
  }
  
  return (
    <div className="text-white bg-gray-900 font-mono">
          <main className='container mx-auto min-h-screen'>
            <div className='flex items-center gap-4'>
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className='text-2xl font-bold text-cyan-300'>Apprendre React by Dawan</h1>
             </div>


              {/* INTRODUCTION */}

              <section>
          <h2 className='text-2xl font-semibold mt-10 py-4'>Introduction</h2>
             <div className='h-1 w-full bg-white mb-3'></div>
            {isLogged &&  <div>
            <p>Hello my name is {name}</p>
            <button 
             className='bg-white text-gray-500 p-2'
             onClick={changeName}>Changer de nom</button>

            {/* Rendu Conditionnel */}
            { age <= 25 ?
             <p>je suis dans la catégorie jeune</p> :
             null }


              {/* Variable dans les attributs */}
              <p className={age <= 35 ? background : null}>Ce texte est bindé</p>
            </div>}

            {isLogged ?
             <p 
             className='text-white bg-emerald-500 p-4 mt-3'>
               Vous êtes connecté</p> : 
               <p 
             className='text-white bg-red-500 p-4 mt-3'>
               Vous n'êtes pas connecté</p>
               }
               <button
                onClick={login}
                className='bg-cyan-500 p-4 my-3'>{ !isLogged ? 'Connexion' : 'Deconnexion'}</button>
          </section>

                {/*  Composant  */}
         <section className='my-5'>
             <h2 className='text-2xl font-semibold mt-10 py-4'>Les composants</h2>
             <div className='h-1 w-full bg-white mb-3'></div>
             <p className='mb-3'>Un composant parent est un composant qui contient d'autres composants enfants. Les enfants peuvent être des composants simples ou des composants plus complexes qui contiennent également des enfants.</p>
            <p>Le composant parent fournit des données et des fonctionnalités aux composants enfants à l'aide de props (propriétés). Les composants enfants peuvent être modifiés en retour grâce à des événements déclenchés par les interactions utilisateur.</p>
             <CounterF titre={"Titre 1"} />
             </section>


           </main>

           </div>
  )
}

export default App






