import React, { useContext } from 'react';
import Context from '../context/Context';

const Contact = () => {
  const { darkModeOn } = useContext(Context);
  return (
    <div className={darkModeOn ? ' header-dark' : ' header-light'}>
        Contact
    </div>
  )
}

export default Contact