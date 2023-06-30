export type aProductType = {
	id: number;
	template: string;
	brand_name: string;
	category_id: string;
	category_ids: string[];
	parent_category_ids: ParentCategoryIdsType[][];
	category_name: string;
	type: string;
	article: string;
	popular: number;
	size_details: [];
	price: number;
	block: boolean;
	original_price: number;
	coming_soon: boolean;
	date_create: string;
	saleaction: boolean;
	currency: CurrencyType;
	photos: PhotosType[];
	videos: [];
	video_cover: [];
	favorite: boolean;
	count: number;
	subscribe: boolean;
	season: null;
	name_old: string;
	name: string;
	descriptions: MaterialDescriptionsType;
	material_descriptions: MaterialDescriptionsType;
	measurements: MeasurementsType;
	measurements_unit: string;
	model: ModelType;
	stores: StoresType;
	sizes: SizesType;
	is_ffm: boolean;
	colors: ColorsType;
	format_price: string[];
	details_name: DetailsNameType;
	details: DetailsType;
	soldout: boolean;
	available: boolean;
};

interface ParentCategoryIdsType {
	id: string;
	url: string;
	name: string;
}

interface CurrencyType {
	id: number;
	prefix: string;
	prefix_symbol: string;
	postfix: string;
	postfix_symbol: string;
}

interface PhotosType {
	big: string;
	thumbs: {
		"768_1024": string;
		"384_512": string;
	};
	blurhash: string;
	basicColor: {
		colors: string[];
		luminance: number;
	};
}

interface MaterialDescriptionsType {
	mark_down: string;
	html: string;
	text: string;
}

interface MeasurementsType {
	XS: [
		{
			name: string;
			value: number;
		}
	];
	S: [
		{
			name: string;
			value: number;
		}
	];
	M: [
		{
			name: string;
			value: number;
		}
	];
	L: [
		{
			name: string;
			value: number;
		}
	];
}

interface ModelType {
	size: string;
	growth: number;
	chest: number;
	waist: number;
	hips: number;
}

interface StoresType {
	Астана: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Алматы: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Караганда: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Павлодар: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Шымкент: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Актобе: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
	Костанай: [
		{
			name: string;
			address: string;
			work_time: string;
			location: string;
			is_partner: number;
			shop_id: number;
			sizes: {
				"3": string;
				"4": string;
				"5": string;
				"6": string;
			};
		}
	];
}

interface SizesType {
	"3": {
		id: number;
		name: string;
		amount: number;
		show: boolean;
		barcode: string;
		subscribe: boolean;
	};
	"4": {
		id: number;
		name: string;
		amount: number;
		show: boolean;
		barcode: string;
		subscribe: boolean;
	};
	"5": {
		id: number;
		name: string;
		amount: number;
		show: boolean;
		barcode: string;
		subscribe: boolean;
	};
	"6": {
		id: number;
		name: string;
		amount: number;
		show: boolean;
		barcode: string;
		subscribe: boolean;
	};
}

interface ColorsType {
	current: {
		id: number;
		name: string;
		amount: number;
		value: string;
		show: boolean;
		price: string;
		color_sample: [];
	};
	other: [
		{
			id: number;
			name: string;
			amount: number;
			value: string;
			show: boolean;
			price: string;
			color_sample: [];
			photo: {
				thumbs: {
					"768_1024": string;
					"384_512": string;
				};
				blurhash: string;
				basicColor: {
					colors: string[];
					luminance: number;
				};
			};
		}
	];
}

interface DetailsNameType {
	materials: string;
}

interface DetailsType {
	materials: {
		"19ced73d-c8f9-11eb-8258-fcde56ff0106": {
			name: string;
			percent: number;
		};
	};
}
