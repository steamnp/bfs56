import Country from '../components/country'
import DogImage from '../components/dog-api'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  // return <Countries />

  // return <Country />

  return (
    <>
      <ErrorBoundary fallback={<div>Country image is not working!</div>}>
        <Country />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <DogImage />
      </ErrorBoundary>
    </>
  )
}

export default App
