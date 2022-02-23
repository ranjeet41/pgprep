import Header from './Components/Header/header'
import Topbar from "./Pages/Topbar";
import {Routes,Route} from "react-router-dom";
import Subject from "./Pages/Subject";
import Subjects from "./Pages/Subjects";

import Login from './Pages/Login';
import "./App.css";

function App() {
  
  return (
    <div>
      <Topbar/>
      <Header />
     <div>
   
     <Routes>
          <Route path="" element={<Subject/>}></Route>
          <Route path="/Lecture_file" element={<Login/>}></Route>
          <Route path="/Live" element={<Subject/>}  ></Route>
          <Route path="/Attendance" element={<Login/>} ></Route>
          <Route path="/Groups" element={<Subject/>} ></Route>
          <Route path="/Announcement" element={<Login/>}></Route>
          <Route path="/Forum" element={<Subject/>}></Route>
          <Route path="/Log_Book"element={<Login/>} ></Route>
          <Route path="/Assessment" element={<Subject/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;