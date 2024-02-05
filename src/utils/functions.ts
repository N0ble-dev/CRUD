
/**
 * Slices a given text to a maximum number of letters and appends '...' if the text is longer than the maximum.
 *
 * @param {string} txt - the text to be sliced
 * @param {number} maxLetters - the maximum number of letters to include in the sliced text
 * @return {string} the sliced text
 */
export function slicetxt(txt:string,maxLetters:number){
    if (txt.length>=maxLetters)return `${txt.slice(0, maxLetters)} ...`;
    return txt
}