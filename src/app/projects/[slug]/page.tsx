import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

// Metadata function with proper async handling
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>; // Handle params as a Promise
}): Promise<Metadata> {
    const resolvedParams = await params; // Await the Promise
    const slug = resolvedParams.slug; // Extract slug after resolving
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

// Page function with proper async handling
export default async function SingleProjectPage({
                                                    params,
                                                }: {
    params: Promise<{ slug: string }>; // Handle params as a Promise
}) {
    const resolvedParams = await params; // Await the Promise
    const slug = resolvedParams.slug; // Extract slug after resolving
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
