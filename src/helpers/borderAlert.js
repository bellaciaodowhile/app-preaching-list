export const borderAlert = (element, className) => {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 5000);
}