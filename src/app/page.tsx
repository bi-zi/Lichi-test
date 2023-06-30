import { MainPage } from "@/components/mainPage/mainPage";
import { ApiType } from "@/types/apiTypes";

const getCategory = async () => {
	const link = "https://api.lichi.com/category/get_category_product_list";
	const data = {
		category: "clothes",
		lang: 1,
		shop: 1,
		limit: 40,
		page: 1,
	};

	const res = fetch(link, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then(response => response.json());

	return res;
};

export default async function Home() {
	const data: ApiType = await getCategory();

	return (
		<main>
			<MainPage data={data.api_data.aProduct} />
		</main>
	);
}
