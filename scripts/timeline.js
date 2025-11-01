function resizeTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const extraSpace = 100;

    timelineItems.forEach(item => {
        const container = item.querySelector('.content');
        if (container) {
            container.style.height = 'auto';
            container.style.marginTop = (extraSpace / 2) + 'px';
            container.style.marginBottom = (extraSpace / 2) + 'px';
            const contentHeight = container.offsetHeight;
            item.style.height = (contentHeight + extraSpace) + 'px';
        }
    });
}

function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    }
}

window.addEventListener('load', resizeTimelineItems);
window.addEventListener('resize', debounce(resizeTimelineItems, 120));