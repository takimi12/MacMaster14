import { ChangeQuantity } from "@/components/IncDecBtns";
import { ProductInCart } from "../actions/addProductToCart";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function CartPage() {
	const cookieProduct = cookies().get("products");

	const currentCart: ProductInCart[] = cookieProduct
		? JSON.parse(cookieProduct.value)
		: ([] as ProductInCart[]);

	if (!currentCart) {
		return <p>Pusty koszyk!</p>;
	}
	return (
		<section>
			{currentCart.map((el) => (
				<div key={el.name}>
					<p>{el.name}</p>
					<Suspense fallback={<div data-testid="quantity">{el.quantity} </div>}>
						<ChangeQuantity productName={el.name} quantity={el.quantity} />
					</Suspense>
				</div>
			))}
		</section>
	);
}
