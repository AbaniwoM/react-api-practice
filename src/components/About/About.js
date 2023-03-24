import React, { useContext } from 'react';
import Context from '../context/Context';

const About = () => {
  const { darkModeOn } = useContext(Context);
  return (
    <div className={darkModeOn ? ' header-dark' : ' header-light'}>
        About
    </div>
  )
}

export default About