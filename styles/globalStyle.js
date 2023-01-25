import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --main-dark: #121111;
  --main-blue: #4393ff;
  --main-light: #fdf4f4;
  --main-gray: #ada2a2;
  --main-yellow: #f9f2a1;
  --main-red:#b00c0c;
  --main-green:#107d10;
  --main-ff: "Roboto", sans-serif;
  --title-ff: ;
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
    font-size: 1.6rem;
    color: var(--main-light);
    background: var(--main-dark);
    line-height: 1.6;
    font-weight: 400;
    user-select: none;
    
    @media all and (max-width: 1480px) {
      font-size: 1.6rem;
    }
  }


  h1,
  h2 {
    font-family: var(--main-ff);

    font-weight:700;
  }
  h1 {
    font-size: 3rem;
    border-bottom: 1px solid;
  }
  h2{
    font-size: 2.4rem;

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


`;

export default GlobalStyle;
