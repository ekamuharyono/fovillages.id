import React, { useState, useEffect } from 'react'
import styles from './Alert.module.css'

const Alert = () => {

  const [isAlertVisible, setIsAlertVisible] = useState(true);

  useEffect(() => {
    let timer;

    if (isAlertVisible) {
      timer = setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAlertVisible]);

  return (
    <div className={`${styles.alert} ${isAlertVisible ? '' : 'translate-x-96'} bg-green-100 border-l-4 border-green-500 text-green-700 p-4 opacity-70 fixed right-0 bottom-3 transform`} role="alert" data-aos="fade-left" >
      <p>
        <b className="font-bold">Sukses</b> Pesan Anda Sudah Terkirim.
      </p>
    </div>
  )
}

export default Alert