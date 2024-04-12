export async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        console.log(response);
        if (!response.ok) {

            throw new Error('No se pudo obtener los datos');
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}