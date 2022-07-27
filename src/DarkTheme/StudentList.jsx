import React from 'react'

const StudentList = () => {

    const list = [
        {name:'Anna', roll:1, skill:'React'},
        {name:'Amit', roll:2, skill:'Java'},
        {name:'Jolly', roll:4, skill:'Node JS'},
        {name:'Smith', roll:5, skill:'C'},
    ]

  return (
    <div className='block-element'>
      {
        list.map((ele) =>
        <div>
            Name : {ele.name}
            <br/>
            Roll Number : {ele.roll}
            <br/>
            Skill : {ele.skill}

            <br/> <br/>
        </div>
        )
      }
    </div>
  )
}

export default StudentList
