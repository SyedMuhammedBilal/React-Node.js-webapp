import React from 'react'

// list rendering *************

function NameList() {

    const names = ['Bilal', 'Mani', 'Wasiq']

    const persons = [
        {
            id: 1,
            name: 'Bilal',
            skills: 'Programmer'
        },
        {
            id: 2,
            name: 'Mani',
            skills: 'programmer'
        },
        {
            id: 3,
            name: 'Wasiq',
            skills: 'Buissness man'
        }
    ]
    const nameList = names.map((name, index) => (
        <h2 key={index}>{index} My name is {name}</h2>
        ))
    
        return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
