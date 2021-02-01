import React, { useState } from "react";
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import Modal from './components/modal/modal.component';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const closeModal = () => {
    setModalShow(false);
  }
  
  return (
    <div className="App">
      <Header />
      <main className="o-main">
        <Button onClick={() => setModalShow(true)}>Start inquiry</Button>
        {modalShow ? <Modal closeModal={closeModal}/> : null}
      </main>
    </div>
  );
}

export default App;
