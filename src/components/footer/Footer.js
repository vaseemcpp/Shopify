import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

    return (
    <div className={styles.footer}>&copy; {year} 2024 All Rights Reserved
    </div>
  )
}

export default Footer