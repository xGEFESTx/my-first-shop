class Products{

    render(){
        CATALOG.forEach( ({id, name, price, img}) => { 
            console.log(id, name, price, img);
        })
    }
}

const productsPage = new Products();
productsPage.render();