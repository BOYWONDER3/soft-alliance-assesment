import { useState } from 'react'
// import './App.css'

export function One() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

function evenNumbers() {
  setArray(currentArray => {
    return currentArray.map((number) => {
      if(number % 2 === 0) return number
    })
  })
}

  return (
    <div>
    <button onClick={evenNumbers}>Even Numbers</button>
    <br />
    <br />
    {array.join(', ')}
    </div>
  )
}
 


