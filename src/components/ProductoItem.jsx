import React, { useState } from 'react'
import styles from '../css/productos.module.css'
import { Link } from 'react-router-dom'

const ProductoItem = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1)

    const aumentar = () => {
        if (cantidad < producto.stock) {
            setCantidad(prev => prev + 1)
        }
    }

    const disminuir = () => {
        if (cantidad > 1) {
            setCantidad(prev => prev - 1)
        }
    }

    return (
        <div className={styles.cardProducto}>
            <div className={styles.imagen}>
                <Link to={`/producto/${producto.id}`}>
                    <img src={producto.imagen} alt={producto.nombre} />
                </Link>
            </div>
            <div className={styles.descripcion}>
                <h3>{producto.nombre}</h3>
                <div className={styles.cPrecio}>
                    <span className={styles.pTxt}>Precio:</span>
                    <span className={styles.pNumero}>$ {producto.precio.toLocaleString()}</span>
                </div>
                <div className={styles.cCantidad}>
                    <span className={styles.cTxt}>Cantidad:</span>
                    <div className={styles.cCantidadNumero}>
                        <span
                            className={`${styles.minimo} ${cantidad === 1 ? styles.disabled : ''}`}
                            onClick={disminuir}
                        >
                            -
                        </span>
                        <input
                            className={styles.inputCantidad}
                            type="number"
                            value={cantidad}
                            readOnly
                        />
                        <span
                            className={`${styles.maximo} ${cantidad === producto.stock ? styles.disabled : ''}`}
                            onClick={aumentar}
                        >
                            +
                        </span>
                    </div>
                </div>
                <div className={styles.cBotones}>
                    <Link to={`/producto/${producto.id}`} className={styles.btnVerMas}>
                        <i className="fa-solid fa-circle-info"></i> Más Info
                    </Link>
                    <button className={styles.btnAgregar}>
                        <i className="fa-solid fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductoItem
