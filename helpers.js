/**
 * 
 * @param {imageHref} img 
 */

//  Use //* then tab before function to get JSDOC snippet
export const checkImage = img =>
    new Promise(resolve => {
        img.onload = () => {resolve({status: 'ok'}); console.log(`Loaded img from ${img.src}`);};
        img.onerror = () => resolve({status: 'error'});
});
