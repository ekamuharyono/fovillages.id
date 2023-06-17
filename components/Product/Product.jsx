import React from 'react'
import styles from './Product.module.css'

const Product = ({ title, description, price, benefit1, benefit2, benefit3, benefit4 }) => {
  return (
    <div className={`${styles.table__item} pb-5 pt-2 px-3`}>
      <h3 className={`${styles.table__title} font-semibold`}>{title}</h3>
      <p className={styles.table__subtitle}>
        {description}
      </p>
      <div className={styles.table__plan}>
        <span className={styles.table__plan__currency}>Rp</span>
        <span className={styles.table__plan__price}>{price}</span>
        <span className={styles.table__plan__period}>/bulan</span>
      </div>
      <ul className={styles.table__list}>
        <li>
          <b>{benefit1}</b> Perangkat
        </li>
        <li>
          <b>{benefit2}</b> UpTo
        </li>
        <li>
          <b>{benefit3}</b> Kuota
        </li>
        <li>
          <b>{benefit4}</b> 1 DesaLink Voucher
        </li>
      </ul>
      <a
        href="https://forms.gle/Tv3uunYsJsxr4uNP6"
        className={styles.table__button}
      >
        Pilih Paket
      </a>
    </div>
  )
}

export default Product