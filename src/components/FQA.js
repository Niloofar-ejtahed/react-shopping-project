import React from 'react'
import { FQAList } from '../constant/FQA-list'

export default function FQA() {

  return (
    <div className=' flex'>

      <div className='w-3/5 text-left mx-auto'>

        {FQAList.map((FQA , index) => {
          return (
            <div key={index} tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border mb-2"  >
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                {FQA.question}
              </div>
              <div className="collapse-content">
                <p>{FQA.answer}</p>
              </div>
            </div>
          )

        })}

      </div>

      <div>
        <img src={require('../assets/FQA.png')} style={{ width: '300px' }} />
      </div>

    </div>

  )
}
