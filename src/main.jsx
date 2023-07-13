import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// const handleWebGLContextLost = (event) => {
//   event.preventDefault();
//   console.log("WebGL context lost. Attempting to restore...");
//   // Recreate the WebGL context and restore resources
//   // You may need to recreate shaders, buffers, textures, etc.
//   // Once the context is restored, you can continue rendering.
// };

// const rootElement = document.getElementById("root");

// // Add event listener for WebGL context loss
// rootElement.addEventListener("webglcontextlost", handleWebGLContextLost);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
