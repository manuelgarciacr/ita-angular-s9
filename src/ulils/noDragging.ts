export const noDragging = () => {
    // Prevents elements dragging
    const links = document.getElementsByTagName('a');
    const images = document.getElementsByTagName('img');

    for (let i = 0; i < links.length; i++)
        links[i].addEventListener('dragstart', (e) => {
            console.log('EVEVEV');
            e.preventDefault();
        });

    for (let i = 0; i < images.length; i++)
        images[i].addEventListener('dragstart', (e) => {
            console.log('EVEVEV');
            e.preventDefault();
            console.log(links, links.length);
        });
}
