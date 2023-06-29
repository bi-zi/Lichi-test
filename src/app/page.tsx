import { MainPage } from "@/components/mainPage/mainPage";

const getCategory = async () => {
  const link = "https://api.lichi.com/category/get_category_product_list";
  const data = {
    category: "clothes",
    lang: 1,
    shop: 1,
    limit: 12,
    page: 1,
  };

  const res = fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return res;
};

export default async function Home() {
  const data = await getCategory();


  return (
    <main>
      <MainPage boba={data.api_data.aProduct} />
    </main>
  );
}
