import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
