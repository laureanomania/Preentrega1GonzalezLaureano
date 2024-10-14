import React from "react"
import Item from "./Item"
import styles from '../styles/itemlist.module.css'


const ItemList = ({ products }) => {
    const handleViewMore = (item) => {
        
      };
    return (
        <div className={styles.container}>
            {products.map((product) => {
                return (
                    <Item item={product} key={product.id} onViewMore={handleViewMore}/>
                )
            })}
        </div>
    )
}

export default ItemList