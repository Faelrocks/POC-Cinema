"use client"
import styles from './buybutton.module.css'

const BuyButton = ({preco}) => {

    return (
    <section className={styles.button}>
        <button className={styles.buybutton}>
            <div>
                Comprar<br/>
            </div>
            <div className={styles.preco}>
                R${preco}
            </div>
        </button>
    </section>
    )
}

export default BuyButton