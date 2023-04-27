import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <main>
        <Navbar />
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
