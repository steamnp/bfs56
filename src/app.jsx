// data types
// number
// string
// object
// undefined
// function
// boolean

const numbers = [9, 7, 18, 5, 7] // statement

console.log(
  numbers.sort(function (a, b) {
    return b - a
  })
)

// give me an array with image url from unsplash
const imgUrls = [
  'https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722359546494-8e3a00f88e95?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722431096503-3dad915732ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722353617129-e44c05bd012f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

// other important array methods
// filter, reduce, forEach, sort

numbers // expression

// console.log(numbers)

// function () {} -> callback function

function App() {
  return (
    <div>
      {imgUrls.map(function (imgUrl, index) {
        return <img key={index} className="w-40 h-40" src={imgUrl} />
      })}
    </div>
  )
}

export default App

function displayMyName(firstName, lastName) {
  return firstName + lastName
}

displayMyName('Gorakh', 'Joshi')
// console.log(typeof displayMyName)
