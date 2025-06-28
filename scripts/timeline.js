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

window.addEventListener('load', resizeTimelineItems);
window.addEventListener('resize', resizeTimelineItems);