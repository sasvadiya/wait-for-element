/**
 * waitForElement - A utility function to wait for the specified element to be available in the DOM.
 *
 * @param {string} selector - The CSS selector of the element to wait for.
 * @returns {Promise<Element>} - A promise that resolves with the requested element when available.
 *
 * @developer Name: Vijay Sasvadiya
 * @developer GitHub: https://github.com/sasvadiya
 * @developer Email: sasvadiya@gmail.com
 * @created Saturday, 7 October 2023
 * @lastModified Saturday, 7 October 2023
 */

async function waitForElement(selector) {
    return new Promise(resolve => {
        const checkElement = () => {
            const element = document.querySelector(selector);
            element ? resolve(element) : requestAnimationFrame(checkElement);
        };
        checkElement();
    });
}
