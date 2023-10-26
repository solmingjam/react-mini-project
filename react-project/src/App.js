import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies/:id' element={<MovieDetail />}/>
            </Routes>
        </div>
    );
}

export default App;
