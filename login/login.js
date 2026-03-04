class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./login/login.css">
            <div class="login-wrapper">
                <header class="login-header">
                    <img src="./Images/dior.png" alt="Dior & I" class="logo">
                    
                    <div class="language-dropdown-container">
                        <select class="language-select">
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                        </select>
                        <svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </header>

                <main class="login-main">
                    <section class="login-option">
                        <h2 class="option-title">I have a professional email (SSO)</h2>
                        <button class="btn enter-btn" aria-label="Enter with professional email">Enter</button>
                    </section>

                    <section class="login-option">
                        <h2 class="option-title">I don't have a professional email</h2>
                        <button class="btn enter-btn" aria-label="Enter without professional email">Enter</button>
                    </section>
                </main>
            </div>
        `;

        // Adding explicit bindings to web component buttons so they navigate correctly from root path test
        const buttons = this.shadowRoot.querySelectorAll('.enter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Since Web Components logic runs in context of index.html at root, 
                // and Terms of use is at roots terms-of-use/index.html
                window.location.href = './terms-of-use/index.html';
            })
        });
    }
}

customElements.define('login-component', LoginComponent);
