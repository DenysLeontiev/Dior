class DiorNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const activePage = this.getAttribute('active') || 'home';
        this.render(activePage);
    }

    buildNavItems(activePage) {
        return `
            <a href="../home/index.html" class="nav-item ${activePage === 'home' ? 'active' : ''}">
                <div class="icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </div>
                <span>Home</span>
            </a>

            <a href="#" class="nav-item ${activePage === 'catalogue' ? 'active' : ''}">
                <div class="icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                </div>
                <span>Catalogue</span>
            </a>

            <a href="../events/index.html" class="nav-item ${activePage === 'events' ? 'active' : ''}">
                <div class="icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                </div>
                <span>Events</span>
            </a>

            <a href="../community/index.html" class="nav-item ${activePage === 'community' ? 'active' : ''}">
                <div class="icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                </div>
                <span>Community</span>
            </a>

            <a href="../notifications/index.html" class="nav-item ${activePage === 'notifications' ? 'active' : ''}">
                <div class="icon-container relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    <span class="badge">7</span>
                </div>
                <span>Notifications</span>
            </a>

            <a href="../my-account/index.html" class="nav-item ${activePage === 'account' ? 'active' : ''}">
                <div class="icon-container account-img-container">
                    <img src="../../Images/user-silhouette.svg" alt="User" class="account-img" />
                </div>
                <span>My account</span>
            </a>
        `;
    }

    render(activePage) {
        const navItems = this.buildNavItems(activePage);

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../components/navbar/navbar.css?v=4">

            <nav class="navbar">
                <div class="nav-left">
                    <img src="../../Images/dior.png" alt="Dior &amp; I" class="dior-logo">
                </div>

                <div class="nav-center">
                    ${navItems}
                </div>

                <div class="nav-right">
                    <div class="search-container">
                        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <span class="search-text">Search</span>
                    </div>

                    <button class="menu-btn" aria-label="Open menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>

            <!-- Mobile Bottom Tab Bar -->
            <nav class="mobile-bottom-nav" aria-label="Mobile navigation">
                ${navItems}
            </nav>

            <!-- Sidebar Overlay -->
            <div class="sidebar-backdrop" id="sidebarBackdrop"></div>

            <!-- Sidebar Menu -->
            <div class="sidebar-menu" id="sidebarMenu">
                <div class="sidebar-header">
                    <h2 class="sidebar-title">CATALOGUE</h2>
                    <button class="close-btn" id="closeSidebarBtn" aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <ul class="sidebar-nav-list">
                    <li>
                        <a href="#" class="sidebar-link">
                            <span>CULTURE & HERITAGE</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link">
                            <span>PRODUCTS</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link">
                            <span>LEADERSHIP</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link">
                            <span>SECURITY</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link">
                            <span>IT</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </li>
                </ul>
            </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const menuBtn = this.shadowRoot.querySelector('.menu-btn');
        const closeBtn = this.shadowRoot.getElementById('closeSidebarBtn');
        const backdrop = this.shadowRoot.getElementById('sidebarBackdrop');
        const sidebar = this.shadowRoot.getElementById('sidebarMenu');

        const openSidebar = () => {
            backdrop.classList.add('visible');
            sidebar.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeSidebar = () => {
            backdrop.classList.remove('visible');
            sidebar.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (menuBtn) menuBtn.addEventListener('click', openSidebar);
        if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
        if (backdrop) backdrop.addEventListener('click', closeSidebar);

        // Close sidebar on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });
    }
}

customElements.define('dior-navbar', DiorNavbar);
