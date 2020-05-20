export interface ProductDetail {
    $key: string;
    title: String;
    price: number;
    rating: number;
    description: string;
    imageUrls: String[]
    reviews: Review[],
    models: string[]
    model: string,
    prices: number[]
}

export interface Review {
    name: string;
    rating: number;
    timeStamp: Date;
    comment: string;
}