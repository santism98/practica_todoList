import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, ServicesPage, NavBar, Gallery } from './components'

function App() {


  return (
    <>

      <header className='bg-green color-light text-center header'>

        <h2>Práctica TodoList</h2>

      </header>

      <NavBar />

      <main className='text-center header'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='servicios' element={<ServicesPage />} />
          <Route path='form' element={<Gallery />} />
          <Route path='login' element={<LoginPage />} />

          {/* <Route path='/*' element={<LoginPage />} /> */}
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>

      </main>

      <footer className="bg-green color-light text-center header">

        <p>Footer</p>

      </footer>

    </>



  )
}

export default App
