document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('sitemap-svg');
    if (!svg) return;

    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // Accessibility: Click on Enter key press
    const nodeGroups = document.querySelectorAll('.sitemap-node-group');
    nodeGroups.forEach(group => {
        group.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                const link = group.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });

    // --- Dynamic viewBox Adjustment ---
    function adjustViewBox() {
        const container = document.querySelector('.sitemap-svg-container');
        if (!container) return;

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const originalWidth = 1400;
        const originalHeight = 1200;
        const originalAspectRatio = originalWidth / originalHeight;

        const containerAspectRatio = containerWidth / containerHeight;

        let newViewBoxWidth, newViewBoxHeight;

        if (containerAspectRatio > originalAspectRatio) {
            newViewBoxHeight = originalHeight;
            newViewBoxWidth = originalHeight * containerAspectRatio;
        } else {
            newViewBoxWidth = originalWidth;
            newViewBoxHeight = originalWidth / containerAspectRatio;
        }
        svg.setAttribute('viewBox', `0 0 ${newViewBoxWidth} ${newViewBoxHeight}`);
    }

    adjustViewBox();
    window.addEventListener('resize', adjustViewBox);
});