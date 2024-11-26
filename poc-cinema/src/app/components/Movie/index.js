"use client"
import { useState, useEffect } from 'react'
import styles from './movie.module.css'
import Seats from '../Seats'

const movies = require("../filme.json")

const Movie = ({ titulo, horario, sinopise, lancamento, direcao }) => {
    const [screenImage, setScreenImage] = useState("")
    const [subtitleImage, setSubtitleImage] = useState("")

    const updateScreenImage = (screen, subtitle) => {

        const corTema = window.matchMedia('(prefers-color-scheme: dark)')

        if (corTema.matches === true) {
            screen = "/images/escuro/tela.png"
            subtitle = "/images/escuro/legendas.png"

        } else {
            screen = "/images/claro/tela.png"
            subtitle = "/images/claro/legendas.png"
        }

        console.log(screen)
        console.log(subtitle)
        setScreenImage(screen)
        setSubtitleImage(subtitle)
    }

    useEffect(() => {
        const corTema = window.matchMedia('(prefers-color-scheme: dark)')

        // Define a imagem inicialmente
        updateScreenImage()

        // Adiciona um listener para monitorar alterações no esquema de cores
        const handleThemeChange = () => updateScreenImage()
        corTema.addEventListener("change", handleThemeChange)

        // Remove o listener ao desmontar o componente
        return () => {
            corTema.removeEventListener("change", handleThemeChange)
        }
    })


    return (
        <section className={styles.movie}>
            <div className={styles.top}>
                <h1 className={styles.titulo}><b>{titulo}</b><br /></h1>
                <h2 className={styles.horario}>{horario}</h2>
            </div>
            <section className={styles.bottom}>
                <div className={styles.room}>
                    <div className={styles.seat}>
                        {movies.assentos.map(vacant => <Seats
                            number={vacant.numero}
                            vacant={vacant.disponivel}
                        />
                        )}
                    </div>
                    <div className={styles.tela}>
                        <p>Tela</p>
                        <img src={screenImage} />
                        <img src={subtitleImage} />
                    </div>
                </div>
                <div className={styles.texto}>
                    <p className={styles.sin}><b>Sinopise do filme</b><br /> {sinopise} </p>
                    <p className={styles.data}><b>Data de lancamento</b><br /> {lancamento} </p>
                    <p className={styles.dir}><b>Direcao</b><br /> {direcao} </p>
                </div>
            </section>
        </section>

    )
}

export default Movie

