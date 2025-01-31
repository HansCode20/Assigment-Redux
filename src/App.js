import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';


const App = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
