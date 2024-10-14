import React from 'react';
import styles from '../styles/item.module.css';

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <h2 className={styles.title}>{item.title}</h2>
      <span className={styles.price}>${item.price}</span>
      <p className={styles.description}>{item.description}</p> 
    </div>
  );
};

export default Item;
