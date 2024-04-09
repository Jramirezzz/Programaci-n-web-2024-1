export const fetchImg = async (word) => {
    const IMG_URL = 'https://cataas.com/cat/says/'
    try {
        const res = await fetch(IMG_URL + word)
        if(res.ok )
        throw new Error("Error al obtener la informacion")
    return res.url
    } catch (error) {
        console.log("error")
        
    }
}