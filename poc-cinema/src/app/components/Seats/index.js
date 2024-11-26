"use client"
import { useState, useEffect } from 'react'
import style from "./seat.module.css"

const Seats = ({ number, vacant }) => {
    const [seatVacant, setSeatStatus] = useState(vacant)
    const [seatImage, setSeatImage] = useState("/images/escuro/assentolivre.png")
    const [seatBuy, setSeatBuy] = useState(false)

    const updateThemeImage = (seat) => {

        const corTema = window.matchMedia('(prefers-color-scheme: dark)')

        if (corTema.matches === true) {
            seat = "/images/escuro/assentolivre.png"

            if (seatVacant === false) {
                seat = "/images/escuro/assentoocupado.png"
            }
            } else {
                seat = "/images/claro/assentolivre.png";
                if (seatVacant === false) {
                    seat = "/images/claro/assentoocupado.png"
                }
            }

        //console.log(seat)
        setSeatImage(seat)
    }

    useEffect(() => {
        const corTema = window.matchMedia('(prefers-color-scheme: dark)')

        // Define a imagem inicialmente
        updateThemeImage()

        // Adiciona um listener para monitorar alterações no esquema de cores
        const handleThemeChange = () => updateThemeImage()
        corTema.addEventListener("change", handleThemeChange)

        // Remove o listener ao desmontar o componente
        return () => {
            corTema.removeEventListener("change", handleThemeChange)
        }
    }, [seatVacant]) // Atualiza também se o estado `seatVacant` mudar

    const vacantSeat = () => {
        setSeatStatus(seatVacant)
    }

    const selectSeat = (seat) => {

        if (seatVacant == true && seatBuy == false) {
            seat = "/images/assentoselecionado.png"
            setSeatImage(seat)
            setSeatBuy(true)
        } else if (seatVacant == true && seatBuy == true) {
            updateThemeImage(seat)
            setSeatBuy(false)
        }

    }



    return (
        <section className={style.seat}>
            <img src={seatImage} onLoadedData={vacantSeat} onClick={selectSeat} />
        </section>
    )
}

export default Seats