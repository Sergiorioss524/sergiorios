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

// Correctly typed generateMetadata function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Sergio Rios",
      description:
          "Sergio Rios is a developer, math enthusiast. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

// SingleProjectPage function
export default function SingleProjectPage({ params }: Props) {
  const { slug } = params; // Deconstruct slug from params
  const product = products.find((p) => p.slug === slug);

  // Redirect if product is not found
  if (!product) {
    redirect("/projects");
  }

  return (
      <Container>
        <SingleProduct product={product} />
      </Container>
  );
}
