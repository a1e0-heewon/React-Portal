import React, { useState } from 'react';
import BaseStyle from './BaseStyle'

const App = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onModalOpen = () => {
    setModal(true);
  }

  const onModalClose = () => {
    setModal(false);
  }

  return (
    <div>
      <button onClick={onModalOpen}>열기</button>
      {modal && (
        <BaseStyle onClose={onModalClose} />
      )}
    </div>
  );
}

export default App;