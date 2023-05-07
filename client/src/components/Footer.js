import React, { useState, useEffect} from 'react'

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      setVisible(
        (prevScrollPos > currentScrollPos)
      );
  
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);


  return (
    <footer className={!visible && 'hidden'}>
        <p>&copy; Food Blog {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
