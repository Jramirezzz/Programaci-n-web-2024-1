export function utilsSplit(word) {
    const slicedWord = word.split(' ').slice(0, 4).join(' ');
    return slicedWord;
}