export async function fetchCatImage(fact) {
    try {
        const splitData = fact.split(' ').slice(0, 4).join('');
        const imageUrl = `https://cataas.com/cat/says/${splitData}`;
        return imageUrl;
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        throw error;
    }
}