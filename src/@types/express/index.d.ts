interface Product {
    productId: string,
    name: string,
    stock: number,
    price: number
}

interface Item {
    quantity: number,
    product: Product
}


declare namespace Express {
    interface Request {
        user?: { 
            userId: string,
            isAdm: boolean,
            cartId: string,
        }
        items?: Array<item>
    }
}