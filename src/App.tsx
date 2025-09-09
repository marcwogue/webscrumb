
import { Route,  Routes } from 'react-router-dom'
import SideBar from './components/sideBar'
import Dash from './pages/dash'
import StudentsPage from './pages/etudiants'
import StudentNotesPage from './pages/notesEtudians'

const App = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <SideBar/> 
      <Routes>
        <Route index element ={<Dash/>}/>
        <Route  path='/etudiants' element ={<StudentsPage/>}/>
        <Route  path='/etudiant/:id' element ={<StudentNotesPage/>}/>
      </Routes>
    </div>
  )
}

export default App