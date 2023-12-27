# Bem vindo ao curso Git e GitHub

![Logo do Git](https://cdn.iconscout.com/icon/free/png-256/free-git-225996.png)
![Logo do GitHub](https://img1.gratispng.com/20180514/hcq/kisspng-github-logo-repository-computer-icons-5afa376beb2671.4883383715263476279632.jpg)

Nesse curso você irá dominar todo **Git** e **GitHub** do _zero ao profissional_.

## Módulos:

_Os módulos irão ensinar desde o básico até o avançado sobre o **Git** e **GitHub**._

- Começando com **Git**.
- Aprendendo sobre branches.
- Git avançado.
- Usando o GitHub de forma profissional

1. Começando com **Git**.
    1. O que é Git?
    2. O que são repositórios?
    3. Instalação do Git
2. Aprendendo sobre branches.
3. Git avançado.
4. Usando o GitHub de forma profissional 

**Últimos updates:**
- [x] Criação de um servidor Express JS.
- [ ] Sistema de login semelhante ao do Facebook.
- [ ] Dashbord para o gerenciamento do projeto

### Redes sociais

[**Instagram**](https://www.instagram.com/fernandosantos20200/)

[_X (antigo Twitter)_](https://twitter.com/fernand33138152)

[**_Facebook_**](https://www.facebook.com/profile.php?id=100017791291888)

[_**GitHub**_](https://github.com/Fernandosantos0)

[LICENSE](./LICENSE)

> Este é um blockquote, usado para destacar alguma área. 
>
> Segunda área destacada

### Comando para rodar nosso programa:

```bash
    npm start
```

**Código-fonte para criar um servidor Express JS:**

```js
    /* Importando os módulos */
    const express = require('express');

    /* Invocando a função do express */
    const app = express();

    /* Rotas */
    app.get('/', (req, res, next) => {
        res.status(200).send('Olá mundo!');
    });

    /* Subindo o servidor */
    const port = process.env.PORT || 3000;
    const host = 'hostname';
    app.listen(port, host, () => {
        console.log(`Server ON - http://${host}:${port}`);
    });
```

**Script PHP de exemplo:**

```php
    # Criando as variáveis
    $nome = 'Fernando';
    $sobrenome = 'Santos';
    $idade = 23;

    echo "Olá, meu nome é $nome $sobrenome e tenho $idade anos de idade.";
```

**Tag HTML5:**
```html
    <header id="header">
        <div class="container">
            <h1>Logo</h1>

            <nav id="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                    <li>
                        <a href="#">Marcas</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </ul>
            </nav> <!-- menu -->
        </div> <!-- container -->
    </header> <!-- header -->
```


**Estilos css:**

```css
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: arial, sans-serif;
    }

    .container {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
    }

    #header {
        width: 100vw
    }

    #header > .container {
        display: flex;
    }
```

**Informações sobre propriedades:**

Propriedade | Descrição
------------|-----------
name | Permite capturar o nome digitado no campo input
size | Permite definir o tamanho do campo
background-color | Permite definir a cor _HEX_ do fundo do elemento
onPress | Função ao clicar no campo
