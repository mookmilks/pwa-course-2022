import Chat from './Chat';
import Profile from './Profile';
import Function from './Function'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Chat/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            <Route path ="/function" element={<Function/>}/>
            
        </Routes>
        </BrowserRouter>        
    )
}

export default Router;