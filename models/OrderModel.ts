export type OrderModel = {
    id: number;
    total_amount: number;
    quantity: number;
    created_at: string;
    beer: {
        id: number;
        name: string;
        price: string;
    };
}