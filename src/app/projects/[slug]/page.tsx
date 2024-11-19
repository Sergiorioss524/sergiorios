import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

// Metadata f
// unction
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>; // Handle params as a Promise
}): Promise<Metadata> {
    const { slug } = (await params) as { slug: string }; // Await and cast params
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

// Page function
export default async function SingleProjectPage({
                                                    params,
                                                }: {
    params: Promise<{ slug: string }>; // Handle params as a Promise
}) {
    const { slug } = (await params) as { slug: string }; // Await and cast params
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
