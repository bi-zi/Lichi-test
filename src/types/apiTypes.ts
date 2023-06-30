import { aFiltersType } from "./aFilters";
import { aProductType } from "./aProductTypes";

export type ApiType = {
	api_execute_time: string;
	api_success: boolean;
	api_messages: [];
	api_is_developer: boolean;
	api_platform_version: null;
	api_code: number;
	api_authorize: boolean;
	api_data: ApiData;
	api_data_success: boolean;
	api_data_result: boolean;
	api_exception: [];
	api_version: string;
	api_host: string;
};

export type ApiData = {
	aProduct: aProductType[];
	aFilters: aFiltersType;
	iCount: number;
	iPages: number;
	iLimit: number;
	iCurrentPage: number;
	is_filter: boolean;
	aSort: aSortType;
	sGrid: string;
};

interface aSortType {
	newest: {
		active: boolean;
	};
	popular: {
		active: boolean;
	};
	asc: {
		active: boolean;
	};
	desc: {
		active: boolean;
	};
}
