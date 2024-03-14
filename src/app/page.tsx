import { getAllProductsPaginated, } from "@/app/api/product";
import { ProductList } from "@/components/ProductList";

export default async function HomePage() {
	const products  = await getAllProductsPaginated(1, 20, "asc");

	return (
		<section className="mx-auto max-w-md p-12">
			<ProductList products={products} />
		</section>
	);
}
