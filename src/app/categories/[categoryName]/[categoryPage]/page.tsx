import { getAllProductsCount } from "@/app/api/product";
import { Pagination } from "@/components/Pagination";
import { ProductList } from "@/components/ProductList";
import { Metadata } from "next";
import React from "react";

type CategoryPageParams = {
	categoryName: string;
	categoryPage: string;
};

export async function generateMetadata({ params }: { params: CategoryPageParams }): Promise<Metadata> {
	return {
		title: "Categories",
        description: params.categoryName
	};
}

export default async function CategoryPage({ params }: { params: CategoryPageParams }) {
	//TODO: pobrać ProductsGetByCategoryPaginated i wrzucić na liste
	const count = await getAllProductsCount();
	const numOfPages = Math.ceil(count / 4);
	return (
		<div>
			<h1>Categories</h1>
			{params.categoryPage}
			<ProductList
				products={[
					{
						id: "1",
						name: "a",
						price: 3,
						description: "test",
						categories: [],
						images: [
							{
								url: "",
							},
						],
					},
				]}
			/>
			<Pagination numOfPages={numOfPages} />
		</div>
	);
}
