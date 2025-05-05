import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from '../css/detalleProducto.module.css'

const DetalleProducto = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)

    useEffect(() => {
        axios.get('/js/productos.json')
            .then(res => {
                const encontrado = res.data.find(item => item.id.toString() === id)
                setProducto(encontrado)
            })
            .catch(err => console.error(err))
    }, [id])

    const aumentar = () => setCantidad(prev => (producto && cantidad < producto.stock ? prev + 1 : prev))
    const disminuir = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1))

    if (!producto) return <p>Cargando producto...</p>

    return (
        <section className={styles.presentacion}>
            <article className={styles.cardDetalle}>
                <div className={styles.imagen}>
                    <img className={styles.imgProducto} src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className={styles.productoInfo}>
                    <h2>{producto.nombre}</h2>
                    <p className={styles.txtDescripcion}>{producto.descripcion}</p>
                    <div className={styles.cPrecio}>
                        <span className={styles.pTxt}>Precio:</span>
                        <span className={styles.pNumero}>$ {producto.precio.toLocaleString()}</span>
                    </div>
                    <div className={styles.cCantidad}>
                        <span className={styles.cTxt}>Cantidad:</span>
                        <div className={styles.cCantidadNumero}>
                            <span className={styles.minimo} onClick={disminuir}>-</span>
                            <input
                                className={styles.inputCantidad}
                                type="number"
                                value={cantidad}
                                readOnly
                            />
                            <span className={styles.maximo} onClick={aumentar}>+</span>
                        </div>
                    </div>
                    <div className={styles.cBotones}>
                        <button className={styles.btnAgregar}>
                            <i className="fa-solid fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default DetalleProducto;