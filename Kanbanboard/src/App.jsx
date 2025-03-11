import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'


function App() {


  return (
    <div className='container'>
    <Navbar/>
    <div className="main-container">
      <Sidebar/>
      <div className="content">
        <div className="start">
          <h2>Start to manage your task</h2>
          <button className='btn btn-start'>Start</button>
          </div>
      </div>
    </div>
    

    <Footer/>
  
    </div>
  )
}

export default App
