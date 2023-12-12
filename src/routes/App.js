import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../containers/Home';
import './App.scss';

function App() {
  return (
    <div >
      <BrowserRouter basename='/ableton'>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
