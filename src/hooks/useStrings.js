export const useStrings = () => {
    function removeAccents(text) {
        if (text) return text && text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return {
        removeAccents
    }
}