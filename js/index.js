const offeringsJsonString = `
{
    "items" : [
        {
            "name" : "LA DANTE",
            "price" : 11.5,
            "isVegetarian" : true,
            "ingredients" : [ "Tomates romaines finement coupées", "mozarella et basilic frais." ]
        },

        {
            "name" : "LA POULIDOR",
            "price" : 16.5,
            "isVegetarian" : false,
            "ingredients" : [ "Magrets de canards coupés en fines tranches", "lamelles de pomme de terre", "fromage de chèvre." ]
        },

        {
            "name" : "LA MARCELLO",
            "price" : 13,
            "isVegetarian" : true,
            "ingredients" : [ "Feuilles de roquette assaisonnée d'huile d'olive et de vinaigre balsamique et copeaux de parmesan." ]
        },

        {
            "name" : "L'APHRODITE",
            "price" : 13.5,
            "isVegetarian" : true,
            "ingredients" : [ "Tranches d'aubergine grillées et marinées à l'ail", "huile d'olive", "pétales de piments rouges autour d'une louche d'houmous maison." ]
        },

        {
            "name" : "LA BASQUAT",
            "price" : 14,
            "isVegetarian" : false,
            "ingredients" : [ "Gorgonzola et figues recouverts de jambon cru." ]
        },

        {
            "name" : "LA GHANDI (sans tomate)",
            "price" : 14,
            "isVegetarian" : true,
            "ingredients" : [ "Sag Paneer (épinards cuisinés à l'indienne)", "Baba Ganoush (caviar d'aubergines, crème sésame, citron et ail)", "parsemés de mozarella fondue." ]
        },

        {
            "name" : "LA BJORK",
            "price" : 14.5,
            "isVegetarian" : false,
            "ingredients" : [ "Tranches de saumon fumé", "oeufs de lump sur une louche de crème fraiche." ]
        },

        {
            "name" : "L'OBAMA",
            "price" : 15.5,
            "isVegetarian" : false,
            "ingredients" : [ "Bacon grillé", "chutney d'ananas maison." ]
        },

        {
            "name" : "LA CHE",
            "price" : 14.5,
            "isVegetarian" : false,
            "ingredients" : [ "Porc cuisiné façon cubaine (mariné 24h dans de l'ail, citron vert, oignons nouveaux et coriandre) avec ses bananes plantains frites." ]
        },

        {
            "name" : " LA MACIAS",
            "price" : 15.5,
            "isVegetarian" : false,
            "ingredients" : [ "Porc cuisiné façon tajine (oignons, gingembre, coriandre et cannelle) au citron confit", "olives vertes et olives violettes." ]
        },

        {
            "name" : "LA CANTONA",
            "price" : 15.5,
            "isVegetarian" : true,
            "ingredients" : [ "La 8 fromages", "chèvre", "gorgonzola", "cantal", "brie de Meaux", " roquefort", "maroilles", "mozarella et parmesan."]
        },

        {
            "name" : "L'ALMODOVAR",
            "price" : 16,
            "isVegetarian" : false,
            "ingredients" : [ "Pizza Paëlla au poulet", "gambas", "chorizo et petits pois sur crème de tomates safranées."]
        },

        {
            "name" : "L'HO CHI MINH",
            "price" : 16,
            "isVegetarian" : false,
            "ingredients" : [ "Poulet et Gambas sauce curry vert et lait de coco", "citronelle", "coriandre fraîche et cacahuètes pilées."]
        }
    ]
}
`

let offeringsJson = { };

function buildOfferingsSection() {

    let sectionElement = document.getElementById("offerings-section");

    if (!sectionElement) { 
        console.log("il y a un problème avec les offres");
        return;
    }

    try {
        offeringsJson = JSON.parse(offeringsJsonString);
        console.log(offeringsJson);
    }
    catch(error) {
        alert("Il y a un problème avec le menu, merci de contacter l'administrateur du site: " + error);
        return;
    }

    if (!offeringsJson.items) {
        alert("Il y a un problème avec le menu, merci de contacter l'administrateur du site: " +
        "Pas de données.");
        return;
    }

    offeringsJson.items.forEach(item => {

        let newDomItem = document.createElement("p");
        newDomItem.className = "item-name";
        newDomItem.innerHTML = item.name;
        sectionElement.appendChild(newDomItem);

        newDomItem = document.createElement("p");
        newDomItem.className = "item-price";
        newDomItem.innerHTML = "€" + item.price.toFixed(2);
        sectionElement.appendChild(newDomItem);

        if (item.ingredients.length > 0) {

            let listString = "";

            item.ingredients.forEach((ingredient, index) => {
                if (index > 0) {
                    listString += ", ";
                }
                listString += ingredient;
            })

            newDomItem = document.createElement("p");
            newDomItem.className = "item-ingredients";
            newDomItem.innerHTML = listString;
            sectionElement.appendChild(newDomItem);

            let ratingString = "végétarienne: ";
            ratingString += item.isVegetarian ? "oui" : "non";
    
            newDomItem = document.createElement("p");
            newDomItem.className = "item-footnotes";
            newDomItem.innerHTML = ratingString;
            sectionElement.appendChild(newDomItem);
        }

    });

}


// A modifier Failed to load resource: net::ERR_CONNECTION_REFUSED
// Une erreur s'est produite pendant la requête du pdf: TypeError: Failed to fetch

/* function getPdf() {

    console.log("getPDF() called");

    fetch("http://127.0.0.1:3000/?data=" + JSON.stringify(offeringsJson))
    .then(res => res.json())
    .then(data => {
        let url = data.pdfUrl;
        if (url) {
            window.location.href = url;
        }
        else {
            alert("Une erreur s'est produite pendant la requête du pdf. Merci de contacter l'administrateur du site.");
        }
    })
    .catch(error => console.log("Une erreur s'est produite pendant la requête du pdf: " + error));

} */ 

buildOfferingsSection();
