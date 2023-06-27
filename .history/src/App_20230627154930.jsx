import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import { Routes, Route } from "react-router-dom";
import Login from "./components/users/Login";
import Navigation from "./components/Navigation/Navigation";
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
        <div className="bg-black text-white mt-5 flex justify-end items-center shadow-lg p-2">
        <ul className="flex items-center">
    <li className="mr-6">
      <Link class="text-gray-100 hover:text-blue-800" href="#">login</Link>
    </li>
    <li className="mr-6">
      <Link class="text-gray-100 hover:text-blue-800" href="#">Profile</Link>
    </li>
    <li className="mr-6">
      <Link class="text-gray-100 hover:text-blue-800" href="#">logout</Link>
    </li>
    <li className="mr-6">
      <Link class="text-gray-100 hover:text-blue-800" href="#">Active</Link>
    </li>
 
  
  </ul>
        </div>
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5"></h3>
            <Navigation/>
          <Routes>
          {window.location.pathname === "/" && (
            <Route path="/" element={<AddNote />} />
          ) } else {
            <Route path="/edit/:id" element={<EditNote />} />
          }
          <Route path="/login"element={<Login/> }></Route>
          </Routes>

          <Notes />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;