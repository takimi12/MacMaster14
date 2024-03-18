import { getAllProductsPaginated, } from "@/app/api/product";
import { ProductList } from "@/components/ProductList";
import { SortOrder } from "@/components/SortByPrice";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | undefined };
}) {
	const currentPage = 1; // Pobierz aktualną stronę z parametrów URL
	const perPage = 4; // Ustaw ilość produktów na stronie
	const { sort: sortValue } = searchParams as { sort: string };
	const sortQuery = sortValue ?? "";

	const products = await getAllProductsPaginated(currentPage, perPage, sortQuery);

	return (
		<>
			<div className="mb-12 py-24 text-center">
				<h1 className="text-5xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
				<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
					Thoughtfully designed objects for the workspace, home, and travel.
				</p>
			</div>
			<SortOrder />
			<ProductList products={products} />
		</>
	);
}