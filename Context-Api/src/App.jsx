import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Welcome to the new React</h1>
      {/* AB iske neeche jitne bhi components bnege wo sabhi UserContext ko access kr skenge
      Yaha pe hmne apne app ko UserContextProvider se wrap kr diya h jisse ab hme apne app k ander kahi bhi UserContext ko access kr skte h
      Ab hme bas jitne bhi components me UserContext ko use krna h unme useContext hook ka use krna h
      useContext hook ka use krne ke liye hme sabse pehle us component me UserContext ko import krna hoga
      Fir uske baad useContext hook ka use krke UserContext ko access kr skte h
      Jaise ki niche ek example diya gaya h */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
