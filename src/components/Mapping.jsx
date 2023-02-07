import React, { Component } from 'react'

export default class Mapping extends Component {
    
    constructor(props) {
     super(props)
    }

  render() {

    return (
        <div className='flex justify-center'>
        <table className='border-collapse table-fixed w-1/2 text-sm'>
            <thead className='bg-black'>
            <tr>
                <th className='border-b border-slate-700 p-4 pl-8' >Nom</th>
                <th className='border-b border-slate-700 p-4 pl-8'>Age</th>
            </tr>
    
            </thead>
            <tbody className='bg-gray-800'>
                {this.props.users.map(
                    ({age, name, id}) => (
                     <tr key={id}>
                     <td 
                     className='border-b border-slate-700 p-4 pl-8 text-slate-400 text-center'>{name}</td>
                     <td 
                     className='border-b border-slate-700 p-4 pl-8 text-slate-400 text-center'>{age}</td>
                   </tr>
                )  
                )}

               
            </tbody>
        </table>
    
    </div>
    )
  }
}
