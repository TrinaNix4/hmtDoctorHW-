import { Link, Outlet } from "react-router-dom";
import './App.css'


function App() {
  return (
    <div>
      <nav
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Appointments App</h1>
        <nav>
          <Link className='navLink' to="/home">Home</Link>
          <Link className='navLink'to="/about">About</Link> 
          <Link className='navLink'to="/physicians">Physicians</Link> 
          <Link className='navLink'to="/patients">Patients</Link> 
          <Link className='navLink'to="/appointments">Appointments</Link> 
        </nav>
      </nav>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
