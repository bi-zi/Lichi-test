export type aFiltersType = {
	colors: ColorMaterialsType;
	sizes: ColorMaterialsType;
	materials: ColorMaterialsType;
	filling: LiningFillingType;
	liningrs: LiningFillingType;
	price: PriceType;
};

interface ColorMaterialsType {
	name: string;
	selected: [];
	hidden: boolean;
	items: any;
}

interface LiningFillingType {
	name: string;
	selected: [];
	hidden: boolean;
	items: [];
}

interface PriceType {
	name: string;
	selected: [];
	hidden: boolean;
	items: {
		"9999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"14999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"19999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"24999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"29999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"34999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"39999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"44999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"49999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"54999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"59999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"64999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"69999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"74999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"79999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"94999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
		"99999": {
			name: string;
			exist: boolean;
			product_ids: number[];
			active: boolean;
		};
	};
}
