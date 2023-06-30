"use client";
import { MutableRefObject, useCallback, useRef } from "react";
import { VariableSizeList as List, VariableSizeList } from "react-window";

import Row from "./Row/Row";
import styles from "./style.module.scss";

import { addMoreProducts } from "@/functions/addMoreProducts";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { aProductType } from "@/types/aProductTypes";

interface MainPageProps {
	data: aProductType[];
}

interface SizeMap {
	[index: number]: number;
}

export const MainPage = ({ data }: MainPageProps) => {
	const windowWidth: number | null = useWindowWidth();

	const listRef = useRef<VariableSizeList | null>(null);
	const sizeMap: MutableRefObject<SizeMap> = useRef<SizeMap>({});

	const setSize = useCallback((index: number, size: number) => {
		if (sizeMap.current && listRef.current) {
			sizeMap.current = { ...sizeMap.current, [index]: size };
			listRef.current.resetAfterIndex(index);
		}
	}, []);

	const imgQuantity = windowWidth! > 800 ? 3 : 2;

	const extendedProducts = addMoreProducts(data, imgQuantity);

	const getSize = (index: number) => sizeMap.current[index] || 50;

	if (!windowWidth) return;

	return (
		<div className={styles.main}>
			<List
				height={window!.innerHeight}
				itemCount={extendedProducts.length}
				itemSize={getSize}
				width={"100vw"}
				ref={listRef}
			>
				{({ index, style }) => (
					<div style={style} className={"index - " + index}>
						<Row
							products={extendedProducts}
							index={index}
							setSize={setSize}
							windowWidth={windowWidth}
						/>
					</div>
				)}
			</List>
		</div>
	);
};
