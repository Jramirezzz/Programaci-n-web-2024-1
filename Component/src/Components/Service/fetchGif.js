export async function fetchGif (words){
    try {
        // const wordNoSpace = words.trim()
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KDRPYBhbmm5cVq6ZDkSkF9QZ2SZ6IxlH&q=${words}&limit=20&lang=es`)
        if(!response.ok){
            throw new Error('No se pudo obtener los datos')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener tu gift')
        throw error;
        
    }   
}