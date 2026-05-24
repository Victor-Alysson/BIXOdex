# 📱 BIXOdex - O Teu Pad de BIXOS Retro

O **BIXOdex** é uma aplicação web interativa construída em **React**, projetada para simular um dispositivo de hardware retro-futurista (um "Pokepad") para pesquisar e exibir informações sobre criaturas fantásticas (os "Bixos").

Este projeto combina uma estética visual nostálgica de jogos 8-bit/16-bit com conceitos modernos de desenvolvimento frontend, como gestão de estado assíncrona, componentes controlados e manipulação dinâmica de assets.

---

## 🎨 Design e Estética

O visual do BIXOdex foi cuidadosamente construído para evocar a sensação de segurar um aparelho tecnológico antigo, mas poderoso.

* **A Carcaça (Shell):** O layout é emoldurado por uma estrutura robusta em tons de marrom escuro e bronze, simulando um plástico injetado ou metal envelhecido, com botões de ação coloridos e texturizados.
* **O Ecrã (Screen):** Utiliza uma paleta de "Verde Néon" sobre um fundo verde escuro/preto, imitando os antigos monitores CRT ou terminais de fósforo verde. As imagens dos monstros são exibidas dentro deste ecrã com um filtro CSS `pixelated` para forçar uma renderização de Pixel Art nítida e retro.
* **A Imagem de Fundo:** Para imergir o utilizador no mundo dos Bixos, a aplicação apresenta uma imagem de fundo pixelada expansiva, mostrando uma paisagem de aventura com florestas densas, um vulcão ativo e criaturas voadoras ao crepúsculo.

---

## 🚀 Funcionalidades Principais

1.  **Digitação Dupla:**
    * **Teclado Virtual Interativo:** Utiliza os botões azuis do Pokepad para digitar o nome do monstro com cliques do rato.
    * **Suporte a Teclado Físico (Hardware):** Captura eventos globais (`useEffect`) para permitir que o utilizador digite usando o teclado real do computador. Os botões virtuais "afundam" visualmente (`className` dinâmica) para dar feedback quando a tecla física correspondente é pressionada.

2.  **Pesquisa Dinâmica de Monstros:**
    * O utilizador pode pesquisar monstros pelo nome exato (ex: "RATO ELÉCTRICO").
    * A busca funciona instantaneamente ao clicar no botão **BUSCAR** (virtual) ou pressionar a tecla `Enter` (físico).

3.  **Exibição Dinâmica (Modo Monstro vs. Modo Lista):**
    * **Modo Monstro:** Se a busca for bem-sucedida, o ecrã exibe o sprite pixelado do monstro, os seus tipos, nível e atributos de batalha (HP, ATK, DEF).
    * **Modo Lista (Sugestões):** Se o nome digitado não existir, o BIXOdex exibe uma mensagem de erro estilizada a vermelho e **gera automaticamente uma lista interativa** de todos os monstros disponíveis na base de dados. Clicar num item da lista preenche a busca e exibe o monstro imediatamente.

4.  **Ação de Limpar Inteligente:**
    * O botão **LIMPAR** apaga o texto da barra de pesquisa e reinicia o ecrã para o monstro padrão, garantindo que o sistema saia do modo lista/erro instantaneamente.

---

## 💻 Arquitetura e Conceitos de React Utilizados

Este projeto foi estruturado utilizando as melhores práticas de componentização e fluxo de dados do React:

* **Componentização Modular:** O projeto é dividido em componentes lógicos (`PokepadShell`, `MonsterScreen`, `SearchBar`, `VirtualKeyboard`), facilitando a manutenção e a reutilização de código.
* **"State Uplifting" (Elevação de Estado):** O estado da aplicação (texto de busca, monstro ativo) é gerido no componente pai (`PokepadShell`) e distribuído via *props* para os filhos, garantindo que todos os componentes estejam sincronizados.
* **Hooks (`useState` e `useEffect`):**
    * `useState` gere a memória da aplicação (o que está digitado, qual monstro mostrar).
    * `useEffect` é utilizado para configurar os ouvintes (`eventListeners`) globais do teclado físico apenas uma vez (`[]`), evitando loops e vazamentos de memória.
* **Manipulação de Assets com Vite:** As imagens locais (PNGs na pasta `assets`) são importadas diretamente no JavaScript (`monstersData.js`) para que o Vite garanta que os caminhos permaneçam corretos após a compilação.
* **CSS Avançado e Flexbox:** Utilização intensa de Flexbox para layouts estáveis e responsivos (como na grade do teclado). A propriedade `image-rendering: pixelated;` é usada para garantir a estética Pixel Art.

---

## 🛠️ Como Instalar e Rodar o Projeto

Este projeto foi criado utilizando o **Vite** para um desenvolvimento rápido.

### Pré-requisitos
* (versão 16 ou superior)
* Navegador moderno (com suporte a CSS Flexbox e `image-rendering`)

### Passos
1.  Clona o repositório para a tua máquina local.
2.  Abre o terminal na pasta do projeto.
3.  Instala as dependências:
    ```bash
    npm install
    ```
4.  Inicia o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Abre o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

**Projeto desenvolvido como parte de um entregável de desenvolvimento web.**
**Autor:**
