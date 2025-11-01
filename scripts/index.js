function adjustIframeHeight() {
    var iframe = document.querySelector('.main-window');
    var footerHeight = document.querySelector('.footer').offsetHeight;
    var bannerHeight = document.querySelector('.banner').offsetHeight;
    var iframeDocument = iframe.contentWindow.document;

    // Reset the iframe height to auto to get the correct scrollHeight
    iframe.style.height = 'auto';

    var contentHeight = iframeDocument.body.scrollHeight;
    var availableHeight = window.innerHeight - bannerHeight - footerHeight;

    if (contentHeight <= availableHeight) {
        iframe.style.height = availableHeight + 'px';
    } else {
        iframe.style.height = contentHeight + footerHeight + 20 + 'px';
    }

    iframe.style.overflow = 'hidden'; // Make iframe not scrollable
}

window.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Wojciechowski Kacper`;
    }
    let banner = document.getElementById('menu-banner');
    if (banner) {
        banner.innerHTML = createBanner(menuContent);
        const iframe = this.document.querySelector('.main-window');
        banner.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const url = this.getAttribute('href');
                if (!iframe || !link) return;
                const current = iframe.getAttribute('src') || '';
                if (current === url) return;
                iframe.setAttribute('src', url);
            })
        });
    }
    let sidebar = document.getElementById('id-sidebar');
    if (sidebar) {
        sidebar.innerHTML = constructSidebar();
    }
});