# POC-Cinema (React em Prática)

<img src="https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg" width="600px" >

 <!--ts-->
 
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



 ## Componentes
Os componentes em Next.js são criados utilizando a sintaxe de função. Um componente simples poderia ser assim:
 ~~~jsx
// app/components/Hello.js
const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Hello;

~~~
Para usar esse componente na página principal, você poderia fazer:
 ~~~jsx
// app/page.js
import Hello from './components/Hello';

const Home = () => {
  return (
    <div>
      <Hello name="World" />
    </div>
  );
};

export default Home;
~~~

 ## Estilos
### Estilo Global
O CSS global é aplicado a toda a aplicação e é definido em um arquivo, como globals.css. Esse arquivo é importado no layout.js:
~~~css
 /* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}
~~~

~~~jsx
// app/layout.js
import './globals.css';

const Layout = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
~~~~

### Estilo de Módulo
Os módulos CSS permitem que você aplique estilos localmente a um componente, evitando conflitos de nomes. Crie um arquivo de módulo CSS:
~~~css
/* styles/Home.module.css */
.title {
  color: blue;
  font-size: 2em;
}
~~~~
Depois, você pode importá-lo no seu componente:
~~~jsx
// app/page.js
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
    </div>
  );
};

export default Home;
~~~~


