import bensonBlender from './images/blenders/blender.jpg';
import derryBlender from './images/blenders/blender-chrome.jpg';
import fiskBlender from './images/blenders/blender-red.jpg';
import bensonCoffeeMaker from './images/coffee-makers/coffee-espresso.jpg';
import derryCoffeeMaker from './images/coffee-makers/coffee-standard.jpg';
import bensonToaster from './images/toasters/toaster-stainless.jpg';
import derryToaster from './images/toasters/toaster-white.jpg';
import fiskToaster from './images/toasters/toaster-red.jpg';
import retroToaster from './images/toasters/toaster-retro.jpg';
import chromeToaster from './images/toasters/toaster-chrome.jpg';

let products = [
    {
        name: "Benson Blender",
        id: "blender-1",
        category: "blenders",
        price: "80.99",
        image: bensonBlender,
    },
    {
        name: "Derry Blender",
        id: "blender-2",
        category: "blenders",
        price: "92.99",
        image: derryBlender,
    },
    {
        name: "Fisk Blender",
        id: "blender-3",
        category: "blenders",
        price: "114.99",
        image: fiskBlender,
    },
    {
        name: "Benson Coffee Maker",
        id: "coffee-maker-1",
        category: "coffee-makers",
        price: "3,999.00",
        image: bensonCoffeeMaker,
    },
    {
        name: "Derry Coffee Maker",
        id: "coffee-maker-2",
        category: "coffee-makers",
        price: "59.99",
        image: derryCoffeeMaker,
    },
    {
        name: "Benson Toaster",
        id: "toaster-1",
        category: "toasters",
        price: "65.99",
        image: bensonToaster,
    },
    {
        name: "Derry Toaster",
        id: "toaster-2",
        category: "toasters",
        price: "35.99",
        image: derryToaster,
    },
    {
        name: "Fisk Toaster",
        id: "toaster-3",
        category: "toasters",
        price: "44.99",
        image: fiskToaster,
    },
    {
        name: "Retro Toaster",
        id: "toaster-4",
        category: "toasters",
        price: "39.99",
        image: retroToaster,
    },
    {
        name: "Chrome Toaster",
        id: "toaster-5",
        category: "toasters",
        price: "32.50",
        image: chromeToaster,
    },
];

export function getProducts() {
    return products;
}

export function getProductsByCategory(category) {
    return products.filter((product) => 
        product.category === category
    );
}

export function getCategories() {
    let categories = products.reduce((result, product) => {
        if (result.includes(product.category)) {
            return result;
        }
        return result.concat(product.category);
    }, []);

    return categories;
}

export function getProductById(productId) {
    return products.find((product) => product.id === productId );
}

export function convertPriceToNumber(price) {
    return parseFloat(price.replaceAll(',', ''), 10);
}