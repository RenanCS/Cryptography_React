<h1 align="center">
  Apresentação de criptografia com React
</h1>

<h4 align="center">
	🚧  Github Cryptography_React ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-problemas-encontrados">Problemas encontrados</a> •
 <a href="#user-content--licença">Licença</a>
</p>


---
## 💻 Sobre o projeto

O projeto consiste em apresentar aplicação de criptografia, na comunicação entre backend e frontend utilizando chave pública e privada OU Aes sem chave. Foi utilizado no front (react, typescript, node-forge).

✅ Arquitetura Limpa <br/>
✅ React <br/>
✅ Typescript <br/>
✅ Axios - Rxjs <br/>
✅ Node-Forge <br/>

---
## 🚀 Como executar o projeto
Após a instalação do projeto, é possível testar os dois tipo de criptografia, entretanto, será necessário seguir estes passos:

---
##  👷‍♂️ Para ambas criptografias o desenvolvedor deverá utilizar o projeto [Cryptography_Example](https://github.com/RenanCS/Cryptography_Example) como backend;

---

1-Para utilizar chave pública e privada, será necessário executar o projeto [Cryptography_Example](https://github.com/RenanCS/Cryptography_Example);<br/>
1.1-definir o subprojeto **CryptographyCreatePem** como inicial; <br/>
1.2-Definir o caminho onde será gerado o arquivo PERM;<br/>
1.3-Copiar as informações dentro dos arquivos **public.perm, private.perm**;<br/>
1.4-Substituir as informações no arquivo crypt > typecrypt > PubPriKey > (PUBLICKEY, PRIVATEKEY);<br/>
1.5-Dentro do arquivo service > api > definir para utilizar o **factoryPubPriKey**<br/>
<br/>
2-Para utilizar a criptografia AES, será necessário utilizar ajustar o código nos seguintes pontos:<br/>
2.1-Dentro do arquivo service > api > definir para utilizar o **factoryAes**;<br/>

---
## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [.Net core](https://dotnet.microsoft.com/en-us/download/dotnet/5.0).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/), [Visuall Studio](https://visualstudio.microsoft.com/pt-br/downloads/)


---

## ❌Problemas encontrados

 
---

## 🛠 Tecnologias

- **[React](https://reactjs.org/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[Node-Forge](https://www.npmjs.com/package/node-forge)**





