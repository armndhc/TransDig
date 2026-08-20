class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inicio</title>
            <link rel="stylesheet" href="../css/header.css">
        </head>
        <body>
        <!--TOP BAR-->
              <div class="top-bar">
                
            </div>
            <!-- Main Header -->
            <header class="main-header">
                <div class="header-container">
                    <div class="logo-container">
                        <img src="../images/Encabezado/UNAM.png" alt="Logo UNAM" class="logo-unam">
                        <div class="logo-separator"></div>
                        <img src="../images/Encabezado/FI2.png" alt="Logo Facultad de Ingeniería" class="logo-fi">
                        <div class="logo-separator"></div>
                        <img src="../images/Encabezado/Logo TD_ColorNegro_CMYK.png" alt="Logo Transformación Digital" class="logo-fi">
                        <div class="site-title">
                            <h1>Transformación Digital</h1>
                            <p>División de Ingeniería Eléctrica DIE</p>
                        </div>
                    </div>
                    <button class="mobile-menu-btn" id="mobile-menu-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div>
            </header>
        <body>
        `;
    }
}

// Definir el nuevo elemento
customElements.define('header-component', HeaderComponent);

