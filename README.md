# POC-Cinema (React em Prática)

<img src="https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg" width="600px" >

 <!--ts-->
 
 * [Overview do projeto](#Overview)
 * [Ajustes Iniciais NextJS](#Ajustes_Iniciais)
 * [Criando Componentes - BuyButton](#BuyButton)
 * [Criando Componentes - Movie](#BuyButton)
   * [Layout Básico](#BuyButton)
   * [Inserindo informações através de um json (require)](#Estilos)
   * [Inserindo a tela e a leganda (UseState)](#BuyButton)
 * [Criando Componentes - Seats](#BuyButton)
   * [Layout Básico](#Estilos)
   * [Inserindo assentos](#Estilos)
 * [Deixando a Página Responsiva](#Estilos)
   * [Diferentes tamanhos de tela (media queries)](#Estilos)
   * [Diferentes esquemas de cores (matchMedia)](#Estilos)
  
 *   
 
 <!--te-->
#Overview


## Ajustes_Iniciais
 
A estrutura básica de um projeto Next.js geralmente se parece com isso:
~~~arduino
   my-next-app/
   ├── app/
   │   ├── page.js
   │   ├── layout.js
   │   ├── globals.css
   │   └── ... (outras pastas e arquivos)
   ├── public/
   │   ├── images/
   │   └── favicon.ico
   ├── styles/
   │   └── globals.css
   ├── package.json
   ├── next.config.js
   └── README.md
~~~
### 1. Limpando o Page JS e o global CSS/<br>
O Nex.JS vem com um layout default quando o iniciamos, algo parecido com a imagem abaixo (a depender da versão):
[imagem]

Entretanto, nosso layout será bem diferente, então podemos deletar tudo que está dentro da cláusula "Return" no arquivo "page.js",e vamos aplicar a cláusula "use client" no inicio do script:

```javascript
"use client"

export default function Home() {
  return ( 

  );
}

```

Também vamos deletar todo o código dentro do arquivo "global.css" para que aplicar a nossa estilização em fases posteriores do projeto

[imagem] 


## BuyButton

Vamos criar o nosso primeiro componente, o botão de compra de ingressos. 
Para isso, o primeiro passo é criar <b>duas pastas dentro do diretório "src/app"</b>,  uma chamada "components" e outra chamada "BuyButton", resultando no caminho "src/app/components/BuyButton". 
Depois, criamos os arquivos "index.js" e "buybutton.module.css" 

Ao abrir o arquivo "index.js" inputamos a seguinte estrutura inicial:

```javascript
"use client" //definicão entre cliente e servidor js
import styles from './buybutton.module.css' // importa o aquivo css

const BuyButton = () => { 

    return (

    )
} //arrown function de retorno - vai retornar a estrutura html

export default BuyButton //exporta este componente para que possa ser utilizado em outros componentes

```
Observação: Esta estrutura básica com a importaçao do css, Arrow Function de retorno e expot do objeto será usada para a criação de todos os demais componentes deste projeto.

Em seguida, criamos a estrutura html que o componente deve retornar para gerar o botão, com as devidas classes para estilização no css:

```javascript
"use client"
import styles from './buybutton.module.css'

const BuyButton = ({preco}) => { // a arrow function recebe a variável preço -  que seá calculada em outro componente

    return (
    <section className={styles.button}> //section inicial
        <button className={styles.buybutton}> // criação do botão
            <div>
                Comprar<br/> //texto dentro do botão
            </div>
            <div className={styles.preco}>
                R${preco} // preço total da compra - que será calculado em outro componente
            </div>
        </button>
    </section>
    )
}

export default BuyButton
```
Desta forma, já temos um botão, podemos importar este componente na página principal (arquivo "page.js") 

```javascript
"use client"
import BuyButton from "./components/BuyButton"; // importação do componente "Buy Buttons"

export default function Home() {

  return ( 
    <div>
      <BuyButton /> //tag gerada com o export do componente - desta forma, todo o código que fizemos no arquivo "index.js" é transposto para este arquivo.
    </div>
  );
}

```


