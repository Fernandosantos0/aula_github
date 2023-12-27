# Bem vindo ao curso Git e GitHub

![Logo do Git](https://cdn.iconscout.com/icon/free/png-256/free-git-225996.png)

![Logo do GitHub](https://static-00.iconduck.com/assets.00/github-emoji-512x506-u3px3qmr.png)

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


### Redes sociais

[Instagram](https://www.instagram.com/fernandosantos20200/)

[X (antigo Twitter)](https://twitter.com/fernand33138152)

[Facebook](https://www.facebook.com/profile.php?id=100017791291888)

[GitHub](https://github.com/Fernandosantos0)

[LICENSE](./LICENSE)

> Este é um blockquote, usado para destacar alguma área. 
>
> Segunda área destacada

**Comando para rodar nosso programa:**

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