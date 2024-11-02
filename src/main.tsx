import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

//Importaciones Por defecto
//App.jtx - Cuando de todoo el archivo solo me interesa 1 cosa App
// importaciones nombradas { creatRoot } de todo  react-dom traeme este metodo

// React.StrcitMode
// Esto ya no se usaaa, se importa TODO react solo para traerme strictMode

// Stricte Mode
// Es un modo que trata de controlar la manera en que funcionan los componentes
// renderiza - rompe - y vuelve a renderizar para ver si algo ha cambiados
// EN PRODUCCIÓN:  Se Quita

// Create Root
// es un metodo que viene desde react-dom
// CREA una ruta, la raiz de nuestra app

//boostraping, renderiza algo por defecto

//Single Page Application
// esto es solo una pagina, que se va actualizando

// HACE DETECCION DE CAMBIOS
// React hace trigger-> es un evento que inicia un proceso de RENDER
//  Trigger- inicial : Se monta componente - renderiza
//- re-Render : renderiza 1 vez, hay un cambio se renderiza una vez

// REACT trabaja con 2 cosas
// DOM: Renderiza el contenido del html, ve si hay un cambio dentro de...
// DOM VIRTUAL: Que es una COPIA del dom pero con los cambios y ejecuta el RENDER
//  RENDER- ejecutar la funcion, renderizar componentes, los componentes son funciones
// este proceso de comparacion entre dom's, el proceso especifico de
// aplicar el cambio es el COMMIT en react

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
