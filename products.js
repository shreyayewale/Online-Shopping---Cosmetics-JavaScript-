// ALL PRODUCTS IN ONE ARRAY
const products = [
    //Blush
    {
        id: 101,
        
        name: "Blush",
        category: "Makeup",
        image: "images/blush1.jpg",
        description: "PIXI On The Glow Blush Mini",
        price: 700
    },
    
    
    {
        id: 104,
        name: "Blush",
        category: "Makeup",
        image: "images/blush2.jpg",
        description: "Japanese rice rolls filled with fresh vegetables and fish.",
        price: 2000
    },
    
    {
        id: 108,
        name: "Blush",
        category: "Makeup",
        image: "images/blush3.jpg",
        description: "Cosmetics Lip & Cheek Tint - Strawberry Summe",
        price: 600
    },

    //Cleanser
    {
        id: 134,
        name: "Cleanser",
        category: "Skin",
        image: "images/cleanser1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 135,
        name: "Cleanser",
        category: "Skin",
        image: "images/cleanser2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 136,
        name: "Cleanser",
        category: "Skin",
        image: "images/cleanser3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //Compact
    {
        id: 109,
        name: "Compact",
        category: "Makeup",
        image: "images/compact1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 111,
        name: "Compact",
        category: "Makeup",
        image: "images/compact2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 112,
        name: "Compact",
        category: "Makeup",
        image: "images/compact3.jpg",
        description: "M.A.C Studio Fix Powder Plus Compact Foundation - NC35",
        price: 600
    },

    {
        id: 113,
        name: "Compact",
        category: "Makeup",
        image: "images/compact4.jpg",
        description: "Lakme Forever Matte Compact, Smooth Finish, Lasts For 12 Hrs, Even Toned Look",
        price: 600
    },

    {
        id: 115,
        name: "Compact",
        category: "Makeup",
        image: "images/compact5.jpg",
        description: "Lakme 9 To 5 Powerplay Matte Compact, Oil Control Formula, With Vitamin E , Melon",
        price: 600
    },

    //concealer
    {
        id: 116,
        name: "Concealer",
        category: "Makeup",
        image: "images/concealer1.jpg",
        description: "M.A.C Studio Radiance 24HR Luminous Lift Concealer",
        price: 600
    },

    {
        id: 117,
        name: "Concealer",
        category: "Makeup",
        image: "images/concealer2.jpg",
        description: "L'Oreal Paris Infallible Full Wear More Than Concealer ",
        price: 600
    },

    {
        id: 118,
        name: "Concealer",
        category: "Makeup",
        image: "images/concealer3.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    },

    //Conditioner
    {
        id: 200,
        name: "Conditioner",
        category: "Hair",
        image: "images/conditioner1.jpg",
        description: "M.A.C Studio Radiance 24HR Luminous Lift Concealer",
        price: 600
    },

    {
        id: 201,
        name: "Conditioner",
        category: "Hair",
        image: "images/conditioner2.jpg",
        description: "L'Oreal Paris Infallible Full Wear More Than Concealer ",
        price: 600
    },

    {
        id: 202,
        name: "Conditioner",
         category: "Hair",
        image: "images/conditioner3.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    },

    //Eyeliner
    {
        id: 119,
        name: "EyeLiner",
        category: "Makeup",
        image: "images/eyeliner1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 120,
        name: "EyeLiner",
        category: "Makeup",
        image: "images/eyeliner2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //eyeshadow
    {
        id: 121,
        name: "EyeShadow",
        category: "Makeup",
        image: "images/eyeshadow1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 122,
        name: "EyeShadow",
        category: "Makeup",
        image: "images/eyeshadow2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 123,
        name: "EyeShadow",
        category: "Makeup",
        image: "images/eyeshadow3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //foundation
    {
        id: 102,
        name: "Foundation",
        category: "Makeup",
        image: "images/foundation1.jpg",
        description: "Charlotte Tilbury Airbrush Flawless Foundation.",
        price: 1000
    },
    
    {
        id: 105,
        name: "Foundation",
        category: "Makeup",
        image: "images/foundation2.jpg",
        description: "L'Oreal Paris Infallible Cushion Foundation, 24H Flawless Coverage, No Oxidation - N 250",
        price: 200
    },
    
    {
        id: 107,
        name: "Foundation",
        category: "Makeup",
        image: "images/foundation3.jpg",
        description: "Lakme 9 To 5 Powerplay Priming Liquid Foundation",
        price: 300
    },

    {
        id: 107,
        name: "Foundation",
        category: "Makeup",
        image: "images/foundation4.jpg",
        description: "Lakme 9 To 5 Powerplay Priming Liquid Foundation",
        price: 300
    },

    {
        id: 107,
        name: "Foundation",
        category: "Makeup",
        image: "images/foundation5.jpg",
        description: "Lakme 9 To 5 Powerplay Priming Liquid Foundation",
        price: 300
    },

    //fragrance
    {
        id: 206,
        name: "Fragrance",
        category: "Fragrance",
        image: "images/perfume1.jpg",
        description: "M.A.C Studio Radiance 24HR Luminous Lift Concealer",
        price: 600
    },

    {
        id: 207,
        name: "Fragrance",
        category: "Fragrance",
        image: "images/perfume2.jpg",
        description: "L'Oreal Paris Infallible Full Wear More Than Concealer ",
        price: 600
    },

    {
        id: 208,
        name: "Fragrance",
        category: "Fragrance",
        image: "images/perfume3.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    },

    {
        id: 209,
        name: "Fragrance",
        category: "Fragrance",
        image: "images/perfume4.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    },

    //kajal
    {
        id: 119,
        name: "Kajal",
        category: "Makeup",
        image: "images/kajal1.jpg",
        description: "M.A.C Studio Radiance 24HR Luminous Lift Concealer",
        price: 600
    },

    {
        id: 120,
        name: "Kajal",
        category: "Makeup",
        image: "images/kajal2.jpg",
        description: "L'Oreal Paris Infallible Full Wear More Than Concealer ",
        price: 600
    },

    {
        id: 121,
        name: "Kajal",
        category: "Makeup",
        image: "images/kajal3.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    },

    //lipgloss
    {
        id: 129,
        name: "Lipgloss",
        category: "Makeup",
        image: "images/lipgloss1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 130,
        name: "Lipgloss",
        category: "Makeup",
        image: "images/lipgloss2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 131,
        name: "Lipgloss",
        category: "Makeup",
        image: "images/lipgloss3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 132,
        name: "Lipgloss",
        category: "Makeup",
        image: "images/lipgloss4.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 133,
        name: "Lipgloss",
        category: "Makeup",
        image: "images/lipgloss5.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //lipstick
    {
        id: 124,
        name: "Lipstick",
        category: "Makeup",
        image: "images/lipstick1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 125,
        name: "Lipstick",
        category: "Makeup",
        image: "images/lipstick2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 126,
        name: "Lipstick",
        category: "Makeup",
        image: "images/lipstick3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 127,
        name: "Lipstick",
        category: "Makeup",
        image: "images/lipstick4.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 128,
        name: "Lipstick",
        category: "Makeup",
        image: "images/lipstick5.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //mascara
    {
        id: 116,
        name: "Mascara",
        category: "Makeup",
        image: "images/mascara1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 117,
        name: "Mascara",
        category: "Makeup",
        image: "images/mascara2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 118,
        name: "Mascara",
        category: "Makeup",
        image: "images/mascara3.jpg",
        description: "M.A.C Studio Fix Powder Plus Compact Foundation - NC35",
        price: 600
    },

    //moisturizer
    {
        id: 137,
        name: "Moisturizer",
        category: "Skin",
        image: "images/moisturizer1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 138,
        name: "Moisturizer",
        category: "Skin",
        image: "images/moisturizer2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 139,
        name: "Moisturizer",
        category: "Skin",
        image: "images/moisturizer3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //serums
    {
        id: 140,
        name: "Serums",
        category: "Skin",
        image: "images/serum1.jpg",
        description: "Maybelline New York Super Stay Flex Powder Foundation Compact",
        price: 600
    },

    {
        id: 141,
        name: "Serums",
        category: "Skin",
        image: "images/serum2.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    {
        id: 142,
        name: "Serums",
        category: "Skin",
        image: "images/serum3.jpg",
        description: "Kay Beauty Soft Matte Pressed Powder",
        price: 600
    },

    //shampoo
    {
        id: 203,
        name: "Shampoo",
        category: "Hair",
        image: "images/shampoo1.jpg",
        description: "M.A.C Studio Radiance 24HR Luminous Lift Concealer",
        price: 600
    },

    {
        id: 204,
        name: "Shampoo",
        category: "Hair",
        image: "images/shampoo2.jpg",
        description: "L'Oreal Paris Infallible Full Wear More Than Concealer ",
        price: 600
    },

    {
        id: 205,
        name: "Shampoo",
        category: "Hair",
        image: "images/shampoo3.jpg",
        description: "Maybelline New York Instant Age Rewind Eraser Concealer",
        price: 600
    }
];



// GET CATEGORY FROM URL
function getCategoryFromURL() {
    let params = new URLSearchParams(window.location.search);
    //get - extract value of category
    return params.get("category");
}


// DISPLAY PRODUCTS
function displayProducts(category) {

    let container = document.getElementById("makeup-container");
    let title = document.getElementById("category-title");

    if (!container) return;

    let filtered = products;

    
    if (category === "Makeup") {
        filtered = products.filter(p =>
            ["Blush","Compact","Concealer","Foundation","Kajal","Mascara","Lipstick","Lipgloss","EyeShadow","EyeLiner"]
            .includes(p.name)
        );
    }
    else if (category === "Skin") {
        filtered = products.filter(p =>
            ["Cleanser","Moisturizer","Serums"].includes(p.name)
        );
    }
    else if (category === "Hair") {
        filtered = products.filter(p =>
            ["Shampoo","Conditioner"].includes(p.name)
        );
    }
    else if (category) {
        
        filtered = products.filter(p => p.name === category);
    }

    if (filtered.length === 0) {
        container.innerHTML = `<h2 style="color:red;text-align:center;">No Products Found</h2>`;
        return;
    }

    title.innerText = category ? category : "All Products";

    let html = "";

    filtered.forEach(product => {
        html += `
        <div class="imges">
            <img src="${product.image}">
            <div class="imgprop">
                <p>${product.description}</p>
                <div>₹ ${product.price}</div>

                <button onclick='addToCart(${JSON.stringify(product)})'>
                    Add To Cart
                </button>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}


// LOAD PAGE
document.addEventListener("DOMContentLoaded", () => {
    let category = getCategoryFromURL();
    displayProducts(category);
});