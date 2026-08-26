class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="nav-container">
            <div class="main-nav">
                <div class="nav-logos">
                    <img src="../images/Encabezado/FI2.png" alt="Logo UNAM">
                    <img src="../images/Encabezado/Logo TD_ColorNegro_CMYK.png" alt="Logo Facultad de Ingeniería">
                </div>
                <ul class="nav-list" id="main-menu">
                    <li><a href="../../index.html" class="">Inicio</a></li>
                    <li class="dropdown">
                        <a href="#">Acerca de</a>
                        <div class="dropdown-content">
                            <a href="../pages/organizacion-organigrama.html">Organigrama</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Quioscos PC Puma </a>
                        <div class="dropdown-content">
                            <a href="../pages/quioscos.html">Quioscos</a>
                            <a href="../pages/personal.html">&iquest;Quienes somos?</a>
                            <a href="../pages/servicios.html">Servicios</a>
                            <a href="../pages/reglamentotd.html">Reglamento TD</a>
                            <a href="../pages/registroPCPUMA.html">Registro PC Puma</a>
                            <a href="../pages/reservacion.html">Reservaci&oacute;n de Salas</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="../pages/red-pc-puma.html">Red PC Puma</a>
                    </li>
                    <li class="dropdown">
                        <a href="#">Programa de becarios</a>
                        <div class="dropdown-content">
                            <a href="../pages/becarios-convocatoria.html">Convocatoria</a>
                            <a href="https://www.ingenieria.unam.mx/transformaciondigital/IT-Pro/registro/index.php/cargaSolicitudRegistro">Registro</a>
                            <a href="../pages/becarios-generaciones.html">Generaciones</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="../pages/cursos-temario.html">Cursos</a>
                        <div class="dropdown-content">
                            <a href="../pages/cursos-convocatoria.html" class="dropdown-link">Convocatoria</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvfc-D4T5L0GSAmAHAEK3r28_zH1a3IsBziNIyNgvx1yVkTQ/viewform" target="_blank">Registro</a>
                            <a href="../pages/cursos-costos.html" class="dropdown-link">Costos</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Plataformas Educativas</a>
                        <div class="dropdown-content">
                            <a href="../pages/plataformas-educafi.html" class="dropdown-link">EDUCAFI</a>
                            <a href="../pages/plataformas-google-suite.html" class="dropdown-link">Google Suite</a>
                            <a href="../pages/plataformas-office-365.html" class="dropdown-link">Office 365</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="../pages/estadisticas-pc-puma.html">Estad&iacute;sticas PC Puma</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', NavbarComponent);