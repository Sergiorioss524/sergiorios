import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// Ensure correct type for dynamic route params
interface Props {
  params: { slug: string };
}

interface Params {
    slug: string;
}

// Correctly typed generateMetadata function
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
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

// SingleProjectPage function
export default function SingleProjectPage({ params }: { params: Params }) {
  const { slug } = params; // Extract slug
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
