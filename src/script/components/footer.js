class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Solo el fragmento del footer, NUNCA doctype/html/head/body aquí
        this.innerHTML = `
        <footer>
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-logo-section">
                        <img src="../images/Encabezado/FI4.png" alt="Logo Facultad de Ingeniería" class="footer-logo">
                        <h3>Facultad de Ingeniería</h3>
                        <p>Universidad Nacional Autónoma de México</p>
                    </div>
                    <div class="footer-info">
                        <h3>Información de Contacto</h3>
                        <div class="footer-address">
                            <strong>Facultad de Ingeniería, Av. Universidad 3000,</strong><br>
                            Ciudad Universitaria, Coyoacán, Cd. Mx., CP 04510
                        </div>
                        <div class="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                            </svg>
                            <span>Teléfono: 55 56 22 31 20</span>
                        </div>
                        <div class="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                            <span>Email: transformaciondigital@unam.mx</span>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Todos los derechos reservados © 1999 - 2024 / Facultad de Ingeniería / UNAM</p>
                    <p>Última actualización 11-11-2025</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);