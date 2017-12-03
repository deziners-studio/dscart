export interface Products {
    product_id: number;
    product_code: string;
    product_category: number;
    product_brand: number;
    product_title: string;
    product_description: string;
    product_featured_image: string;
    product_gallery: number;
    product_quantity: number;
    product_quantity_order_min: number;
    product_quantity_order_max: number;
    product_quantity_order_units: number;
    product_price: number;
    product_tags: string;
    product_gst_code: number;
    date_added: Date;
    last_modified: Date;
    product_status: number;
}
