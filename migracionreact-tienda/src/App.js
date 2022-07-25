import './App.css';
import './index.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Tienda from './pages/Tienda';
import Categoria from './components/Categoria';
import Ordenar from './components/Ordenar';

function App() {
  return (
    <>
      <Header/>
      <Ordenar/>
      <section className='flex py-3 relative'>
        <Categoria/>
        <Tienda/>
      </section>
    </>
  );
}

export default App;
