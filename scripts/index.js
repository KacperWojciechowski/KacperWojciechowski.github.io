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
    executeInclude();
});