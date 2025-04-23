interface ProductImage {
    id: string;
    image_id: string;
    images_src: string;
    product_id: string;
}

interface Category {
    id: string;
    name: string;
    description: string;
}

export interface Product {
    id: string;
    image_src: string;
    video_src: string;
    title: string;
    description: string;
    price: string;
    is_active: boolean;
    category_id: string;
    created_at: string | null;
    category: Category;
    product_images: ProductImage[];
}
