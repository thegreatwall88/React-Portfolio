
import { Outlet } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="app-container">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  );
}

export default App;
