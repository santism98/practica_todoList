import { Gallery } from "./components/Gallery"


function App() {


  return (
    <>

      <header className='bg-green color-light text-center header'>

        <h2>Práctica TodoList</h2>

      </header>

      <main className='text-center header'>

        <h2>Lista de tareas</h2>

        <Gallery />

      </main>

      <footer className="bg-green color-light text-center header">

        <p>Footer</p>

      </footer>

    </>



  )
}

export default App
