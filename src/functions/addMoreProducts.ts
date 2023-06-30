import { aProductType } from "@/types/aProductTypes";

// функция создает массив такого типа [[{},{},{}]] и увеличивает количество продуктов
export const addMoreProducts = (data: aProductType[], imgQuantity: number) => {
	const products = [];
	const aProduct = data;

	for (let index = 0; index < aProduct.length; index += imgQuantity) {
		products.push(aProduct.slice(index, index + imgQuantity));
	}

	return products;
};
