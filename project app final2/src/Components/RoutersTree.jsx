import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Report from './Pages/Report';
import Newtask from './Pages/Newtask';
// import Newtask from './Pages/Newtask1';

function RoutersTree(){
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newtask" element={<Newtask />} />

            </Routes>
            
        </div>
    );
}
export default RoutersTree;