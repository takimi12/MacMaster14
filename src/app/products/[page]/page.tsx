import {   getAllProductsPaginated } from "@/app/api/product";
import { ProductList } from "@/components/ProductList";
import { SortOrder } from "@/components/SortByPrice";
// Zmodyfikuj funkcję generującą statyczne parametry
export function generateStaticParams() {
  return [{ page: '1' }, { page: '2' }, { page: '3' }]
}

// Zmodyfikuj funkcję strony produktów
export default async function ProductsPage({ params,searchParams }: { params: { page: string },searchParams?:{ [key: string]: string | undefined } }) {


	const currentPage = parseInt(params.page) || 1; // Pobierz aktualną stronę z parametrów URL
	const perPage = 4; // Ustaw ilość produktów na stronie
	const { sort: sortValue } = searchParams as { "sort": string };
	const sortQuery = sortValue ?? "asc";

	const products = await getAllProductsPaginated(currentPage, perPage, sortQuery);


	return <>
	<SortOrder />
	<ProductList products={products} />
	</>;
}
