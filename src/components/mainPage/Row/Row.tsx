"use client";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";

import styles from "./style.module.scss";

import { aProductType } from "@/types/aProductTypes";

interface RowProps {
	products: aProductType[][];
	index: number;
	setSize: (index: number, size: number) => void;
	windowWidth: number | null;
}

export default function Row({
	products,
	index,
	setSize,
	windowWidth,
}: RowProps) {
	const rowRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	useEffect(() => {
		if (rowRef.current) {
			setSize(index, rowRef.current.getBoundingClientRect().height);
		}
	}, [setSize, index, windowWidth]);

	return (
		<div
			className={styles.row__container + " " + index}
			key={index}
			ref={rowRef}
		>
			{products[index].map((item, i: number) => (
				<div className={styles.row__container__item} key={i}>
					<div className={styles.row__container__item_image}>
						<Image
							src={item?.photos?.[0].big}
							fill
							sizes="1"
							priority
							quality={75}
							alt="фото"
						/>
					</div>

					<div className={styles.row__container__item_info}>
						<p>{item?.name}</p>
						<span>{item?.original_price?.toLocaleString()} руб.</span>

						<br />

						{[
							item?.colors?.current?.value,
							item?.colors?.other?.map(x => x.value),
						]
							.flat()
							.map((color, index) => (
								<div key={index} style={{ backgroundColor: "#" + color }}></div>
							))}
					</div>
				</div>
			))}
		</div>
	);
}
