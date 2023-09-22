import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --main-dark: #121111;
  --main-blue: #4d95ea;
  --main-light: #fdf4f4;
  --main-gray: #ada2a2;
  --main-yellow: #f9f2a1;
  --main-red:#b00c0c;
  --main-green:#107d10;
  --main-ff: "Roboto", sans-serif;
  --main-fs:1.8rem ;
  --index: calc(1vh+1vw);
  --space-right:8.2rem;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
    font-family: var(--main-ff);
  }
  html,
  body {
    overscroll-behavior: none;
  }
  body {
    width: 100%;
    height: 100%;
    position: relative;
    font-size:var( --main-fs);
    color: var(--main-light);
    background: var(--main-dark);
    line-height: 1.6;
    font-weight: 400;
    user-select: none;    
    padding: 70px 20px;
    @media all and (orientation: landscape) {
    padding: 60px 40px;
  }
    @media all and (max-width: 1480px) {
      font-size: 1.6rem;
    }
  }


  h1,
  h2 {
    font-family: var(--main-ff);
    font-weight:600;
  }
  h1 {
    font-size: 5rem;
    line-height:1.2;

  }
  h2{
    font-size: 2rem;    



  }
  h3 {
    font-family: var(--main-ff);
 
  }


  h4 {
    font-weight: 400; color:var(--main-gray);
  }
  ul {
    list-style: square inside;
  }
a {
  color:var(--main-blue);
}
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  *::-webkit-scrollbar {
    width: 0;
    background-color: #f5f5f5;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--bg-color);
    border: 1px solid #555555;
    border-radius: 10px;
  }

  .navigation-enter {
  transform: translateY(100vh);
}
.navigation-enter-done {
  transform: translateY(0);
  transition: 150ms ease-in;
}

.navigation-exit-active {
  transform: translateY(100vh);
  transition:  500ms ease-in;
}


.modal-enter {  
  opacity: 0;
  transform: translateY(-100px);  
  transition: 500ms ease-in;
}
.modal-enter-done {
  transform: translateY(0);
  transition: 500ms ease-in;
}

.modal-exit-active {
  transform: translateY(-100px);
  transition:  500ms ease-in;
}


  @media all and (max-width: 1480px){
    :root {
      --space-right:6.2rem;
    }
  }
  @media all and (max-width: 600px){
    h1 {
      font-size: 3rem;

    }
  }
  @media all and (max-width: 1000px) and (orientation: landscape){
    h1 {
      font-size: 4rem;

    }
  }


`;

export default GlobalStyle;
