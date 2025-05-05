import styles from '../css/tips.module.css'
import tipAlimentacion from '../assets/img/tip-alimentacion.png'
import tipHigiene from '../assets/img/tip-higiene.jpg'
import tipIdentificacion from '../assets/img/tip-identificacion.jpg'
import tipAtencion from '../assets/img/tip-atencion.jpg'

const Tips = () => {
    return (
        <section className={styles.tips}>
        <h2>Cuidá a tu mascota</h2>
        <article className={styles['card-tips']}>
            <div className={styles['tip-d']} data-aos="fade-up">
            <figure className={styles['image-mascota']}>
                <img src={tipAlimentacion} alt="img-alimentacion" />
            </figure>
            <div className={styles['descripcion-d']}>
                <h3>Alimentación</h3>
                <p>
                La alimentación de tus perros y gatos debe ser a base de alimentos balanceados acorde a las necesidades de los mismos ó en su defecto lo más variada posible. (Consultá siempre a tu veterinario de confianza).
                </p>
            </div>
            </div>

            <div className={styles['tip-i']} data-aos="fade-up">
            <figure className={styles['image-mascota']}>
                <img src={tipHigiene} alt="img-higiene" />
            </figure>
            <div className={styles['descripcion-i']}>
                <h3>Higiene</h3>
                <p>
                A los perros hay que bañarlos con agua y jabón máximo 1 vez cada 15 días y mínimo 1 vez al mes. Los gatos se limpian solos.
                </p>
            </div>
            </div>

            <div className={styles['tip-d']} data-aos="fade-up">
            <figure className={styles['image-mascota']}>
                <img src={tipIdentificacion} alt="img-identificacion" />
            </figure>
            <div className={styles['descripcion-d']}>
                <h3>Identificación</h3>
                <p>
                Asegurate de que siempre lleve puesto un collar con una placa identificativa con tu número de teléfono. Está demostrado que los perros que llevan una placa en el collar con nombre y teléfono vuelven más rápido a sus hogares.
                </p>
            </div>
            </div>

            <div className={styles['tip-i']} data-aos="fade-up">
            <figure className={styles['image-mascota']}>
                <img src={tipAtencion} alt="img-atencion" />
            </figure>
            <div className={styles['descripcion-i']}>
                <h3>Atención Veterinaria</h3>
                <p>
                Desparasitá a tu mascota cada 6 meses. Si están molestos, se la pasan durmiendo o no quieren comer, llevalos a un veterinario. No hay que darles remedios sin ver a un doctor.
                </p>
            </div>
            </div>
        </article>
        </section>
    )
}

export default Tips
