import MainPage from "./component/MainPage";
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MealInfo from "./component/MealInfo";
const App = () =>{
  return(
    <>

    {/* <MainPage/> */}
   <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/:mealid" element={<MealInfo/>}/>
    </Routes>
    
    </>
  )
}
export default App;