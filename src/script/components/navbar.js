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

                <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>

                <ul class="nav-list" id="main-menu">
                    <li><a href="${homeLink}" class="">Inicio</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Acerca de</a>
                        <div class="dropdown-content">
                            <a href="${pageBase}/organizacion-organigrama.html">Organigrama</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Quioscos PC Puma </a>
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
                        <a href="#" class="dropdown-toggle">Programa de becarios</a>
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
                        <a href="#" class="dropdown-toggle">Plataformas Educativas</a>
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

        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const menuBtn = this.querySelector('#mobile-menu-btn');
        const navList = this.querySelector('#main-menu');
        const navContainer = this.querySelector('#main-navbar');
        const dropdownToggles = this.querySelectorAll('.dropdown-toggle');

        const isMobile = () => window.matchMedia('(max-width: 992px)').matches;

        const closeMenu = () => {
            navList.classList.remove('open');
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            this.querySelectorAll('.dropdown.open').forEach(li => li.classList.remove('open'));
        };

        // Abre/cierra el menú principal (hamburguesa)
        menuBtn.addEventListener('click', () => {
            const willOpen = !navList.classList.contains('open');
            navList.classList.toggle('open', willOpen);
            menuBtn.classList.toggle('active', willOpen);
            menuBtn.setAttribute('aria-expanded', String(willOpen));
        });

        // En móvil, los submenús se abren con click (accordion) en vez de hover
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (!isMobile()) return; // en escritorio se conserva el hover normal
                e.preventDefault();
                const parentLi = toggle.closest('.dropdown');
                const wasOpen = parentLi.classList.contains('open');

                // cierra los demás submenús abiertos
                this.querySelectorAll('.dropdown.open').forEach(li => {
                    if (li !== parentLi) li.classList.remove('open');
                });

                parentLi.classList.toggle('open', !wasOpen);
            });
        });

        // Cierra el menú al hacer click en un enlace real (no toggle) dentro de él
        navList.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                if (isMobile()) closeMenu();
            });
        });

        // Cierra el menú al hacer click fuera del navbar
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target)) closeMenu();
        });

        // Si el usuario redimensiona a escritorio con el menú abierto, lo reseteamos
        window.addEventListener('resize', () => {
            if (!isMobile()) closeMenu();
        });
    }
}

customElements.define('navbar-component', NavbarComponent);