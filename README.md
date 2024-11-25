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

[imagem]

Também vamos deletar todo o código dentro do arquivo "global.css" para que aplicar a nossa estilização em fases posteriores do projeto

[imagem] 


## BuyButton

Vamos criar o nosso primeiro componente, o botão de compra de ingressos. Para isso, o primeiro passo é criar duas pastas dentro do diretório "src/app",  uma chamada "components" e outra chamada "BuyButton", resultando no caminho "src/app/components/BuyButton". Depois, criamos os arquivos "index.js" e "buybutton.module.css" 

Ao abrir o arquivo "index.js" temos a seguinte estrutura inicial

```javascript
"use client"
import './buybutton.module.css'

const BuyButton = ({preco}) => {

    return (
    <section className='button'>
        <button className='buybutton'>
            <div>
                Comprar<br/>
            </div>
            <div className='preco'>
                R${preco}
            </div>
        </button>
    </section>
    )
}

export default BuyButton

```





