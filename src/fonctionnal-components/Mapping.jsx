import React from 'react'

export const MappingF  = ({users}) =>  {
    

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
                {users.map(
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
