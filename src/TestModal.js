import React, {useState} from 'react';

export default function TestModal(props) {
  const [isOpen, setIsOpen] = useState(true);

  var closeModal = () => {
    setIsOpen(false);
  }

  var openModal = () => {
    setIsOpen(true);
  }

  if (isOpen) {
    return(
      <div className="modal" id="testModal">
        The modal is open!
      <button onClick={closeModal}>Close me</button>
      </div>
    )
  }
  else {
    return (
      <button onClick={openModal}>Open Modal</button>
    );
  }
}