import Link from "next/link";
import { type Route } from "next";
import { ActiveLink } from "./ActiveLink";
import { SearchField } from "./SearchField";

export const Navbar = () => {
	return (
		<nav className="mx-auto flex max-w-7xl justify-between p-6 py-10">
			<Link href={"/"}>
				<p className="-rotate-6 bg-zinc-950 p-2 text-3xl font-semibold text-zinc-50">ShopSync</p>
			</Link>
			<ul className="flex items-center gap-4">
				<ActiveLink
					href={"/"}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
				>
					Home
				</ActiveLink>
				<SearchField />
				<ActiveLink
					href={"/products"}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
				>
					New arrivals
				</ActiveLink>
				<ActiveLink
					href={"/products/1" as Route}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
					exact={false}
				>
					All
				</ActiveLink>
				<ActiveLink
					href={"/collections/ckdu452ug0gxm0158pysyubmr" as Route}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
				>
					collections 1
				</ActiveLink>
				<ActiveLink
					href={"/categories/accessories/1" as Route}
					className="border-b-2 border-b-transparent"
					activeClassName="border-b-2 border-zinc-900"
				>
					Categories
				</ActiveLink>
			</ul>
		</nav>
	);
};
