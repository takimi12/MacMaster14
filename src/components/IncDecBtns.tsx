"use client";

import { useCallback, useEffect, useState } from "react";

export function ChangeQuantity({ itemId, quantity }: { itemId: string; quantity: number }) {
	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);
	const [reallyQuantity, setReallyQuantity] = useState(quantity);
	const setOrderItemQuantity = useCallback(async () => {
		switch (true) {
			case reallyQuantity === 0:
				console.log("optimistic quantity is 0 and product was deleted");
				//await editProductInCartAction(itemId);
				break;
			case reallyQuantity > 0:
				console.log("really quantity is greater than 0 and product was changed");
				//await changeItemQuantity(itemId, reallyQuantity);
				break;
			default:
				console.log("really quantity is not set and product was not changed");
				break;
		}
	}, [itemId, reallyQuantity]);
	useEffect(() => {
		const delayTimeout = setTimeout(() => {
			setReallyQuantity(optimisticQuantity);
		}, 400);
		return () => {
			clearTimeout(delayTimeout);
		};
	}, [optimisticQuantity]);

	useEffect(() => {
		if (reallyQuantity !== quantity) {
			setOrderItemQuantity().then(() => {
				console.log("done", reallyQuantity);
			});
		}
	}, [reallyQuantity]);

	return (
		<form className="flex justify-center">
			<button
				data-testid="decrement"
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					if (optimisticQuantity >= 1) {
						setOptimisticQuantity(optimisticQuantity - 1);
					}
				}}
			>
				-
			</button>
			<span data-testid="quantity" className="w-8 text-center">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
