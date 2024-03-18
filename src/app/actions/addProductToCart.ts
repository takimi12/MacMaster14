import { cookies } from "next/headers";

export type ProductInCart = {
	quantity: number;
	name: string;
};

export async function editProductInCartAction(formData: FormData) {
	"use server";

	const name = formData.get("productName");
    const action=formData.get("action")
	if (name && action) {
        const cookieProduct = cookies().get("products");
		const inCart: ProductInCart[] =
			cookieProduct ? JSON.parse(cookieProduct.value) : ([] as ProductInCart[]);

		const isInCart = inCart.find((product: ProductInCart) => product.name === name);
		if (isInCart) {
			const newProducts = inCart.map((el) => {
				if (el.name === name) {
					return {
						...el,
						quantity: action === "increase" ? el.quantity + 1 : el.quantity - 1,
					};
				}
				return el;
			});
			const onlyPositive = newProducts.filter((pr) => pr.quantity > 0);
                console.log("newItems", onlyPositive);

			cookies().set("products", JSON.stringify(onlyPositive));
		} else {
				const newItems = [...inCart, { name, quantity: 1 }];
                console.log("newItems", newItems)
				cookies().set("products", JSON.stringify(newItems));
		}
	}
}
