"use client"
import BuyButton from "./components/BuyButton";
import Movie from "./components/Movie";
import Seats from "./components/Seats";

const movies = require("./components/filme.json");

export default function Home() {

  //console.log(Seats.calculateTicket)

  return ( 
    <div>
      <section>
        <Movie titulo={movies.titulo} horario={movies.horario} sinopise={movies.sinopse} lancamento={movies.dataLancamento} direcao={movies.direcao} />
      </section>
      <BuyButton />
    </div>
  );
}
