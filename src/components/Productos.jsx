import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductoItem from './ProductoItem';
import styles from '../css/productos.module.css';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('/js/productos.json')
        .then(res => {
            console.log(res.data);
            setProductos(res.data);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <section className={styles.sectionProductos}>
        <section className={styles.tituloProductos}>
            <h2>Productos</h2>
        </section>
        <section className={styles.productos}>
            {productos.map(producto => (
            <ProductoItem key={producto.id} producto={producto} />
            ))}
        </section>
        </section>
    );
};

export default Productos;
