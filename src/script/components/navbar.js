class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Usa root="true" cuando el componente se coloque en el index.html de la raíz.
        // Sin ese atributo (o root="false") asume que se usa desde src/pages/*.html.
        const isRoot = this.getAttribute('root') === 'true';

        const homeLink = isRoot ? 'index.html' : '../../index.html';
        const imgBase = isRoot ? 'src/images/Encabezado' : '../images/Encabezado';
        const pageBase = isRoot ? 'src/pages' : '../pages';

        this.innerHTML = `
        <nav class="nav-container" id="main-navbar">
            <div class="main-nav">
                <div class="nav-logos">
                    <img src="${imgBase}/FIBlanco.png" alt="Logo Facultad de Ingeniería" class="logo-fi">
                    <img src="${imgBase}/DIE blanco.png" alt="Logo DIE" class="logo-die">
                    <img src="${imgBase}/Logo TD_Blanco_CMYK.png" alt="Logo Transformación Digital">
                </div>
                <ul class="nav-list" id="main-menu">
                    <li><a href="${homeLink}" class="">Inicio</a></li>
                    <li class="dropdown">
                        <a href="#">Acerca de</a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/organizacion-organigrama.html">Organigrama</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Quioscos PC Puma </a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/quioscos.html">Quioscos</a>
                            <a href="${pageBase}/personal.html">&iquest;Quienes somos?</a>
                            <a href="${pageBase}/servicios.html">Servicios</a>
                            <a href="${pageBase}/reglamentotd.html">Reglamento TD</a>
                            <a href="${pageBase}/registroPCPUMA.html">Registro PC Puma</a>
                            <a href="${pageBase}/reservacion.html">Reservaci&oacute;n de Salas</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="${pageBase}/red-pc-puma.html">Red PC Puma</a>
                    </li>
                    <li class="dropdown">
                        <a href="#">Programa de becarios</a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/becarios-convocatoria.html">Convocatoria</a>
                            <a href="https://www.ingenieria.unam.mx/transformaciondigital/IT-Pro/registro/index.php/cargaSolicitudRegistro">Registro</a>
                            <a href="${pageBase}/becarios-generaciones.html">Generaciones</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="${pageBase}/cursos-temario.html">Cursos</a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/cursos-convocatoria.html" class="dropdown-link">Convocatoria</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvfc-D4T5L0GSAmAHAEK3r28_zH1a3IsBziNIyNgvx1yVkTQ/viewform" target="_blank">Registro</a>
                            <a href="${pageBase}/cursos-costos.html" class="dropdown-link">Costos</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Plataformas Educativas</a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/plataformas-educafi.html" class="dropdown-link">EDUCAFI</a>
                            <a href="${pageBase}/plataformas-google-suite.html" class="dropdown-link">Google Suite</a>
                            <a href="${pageBase}/plataformas-office-365.html" class="dropdown-link">Office 365</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="${pageBase}/estadisticas-pc-puma.html">Estad&iacute;sticas PC Puma</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', NavbarComponent);