import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

// Metadata function for dynamic routes
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug; // Use params.slug directly
    const product = products.find((p) => p.slug === slug) as Product | undefined;

    if (product) {
        return {
            title: product.title,
            description: product.description,
        };
    }

    return {
        title: "Projects | Sergio Rios",
        description: "Sergio Rios is a developer, math enthusiast, and digital nomad.",
    };
}

// Async page function
export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug; // Destructure slug
    const product = products.find((p) => p.slug === slug);

    // Redirect if no product is found
    if (!product) {
        redirect("/projects");
    }

    return (
        <Container>
            <SingleProduct product={product} />
        </Container>
    );
}
