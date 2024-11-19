import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

// Define the expected type for params
interface PageProps {
  params: {
    slug: string;
  };
}

// Metadata function with properly typed params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
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

// Mark the page function as async to handle the promise
export default async function SingleProjectPage({ params }: PageProps) {
  const { slug } = await params; // Await the params object
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
