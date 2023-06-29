"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import { useWindowResize } from "./useWindowResize";
interface MainPageProps {
  boba: any;
}

export const MainPage = ({ boba }: MainPageProps) => {
  const products: any = [];
  const aProduct = boba;

  for (let index = 0; index < aProduct.length; index += 3) {
    products.push(aProduct.slice(index, index + 3));
  }
  const extendedProducts = [...products, ...products, ...products];

  const listRef = useRef();
  const data = useMemo(() => extendedProducts.fill(true).map(() => 1), []);
  const sizeMap = useRef({});
  const setSize = useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current.resetAfterIndex(index);
  }, []);
  const getSize = (index) => sizeMap.current[index] || 50;
  const [windowWidth] = useWindowResize();

  const Row = ({ data, index, setSize, windowWidth, style }) => {
    const rowRef = useRef();

    useEffect(() => {
      setSize(index, rowRef.current.getBoundingClientRect().height);
    }, [setSize, index, windowWidth]);

    return (
      <div
        className={styles.main__container + " " + index}
        style={style}
        key={index}
        ref={rowRef}
      >
        {extendedProducts[index]?.map((item, i) => (
          <div className={styles.main__container__item} key={i}>
            <div className={styles.main__container__item_image}>
              <Image
                src={item?.photos?.[0].big}
                fill
                sizes="1"
                priority
                quality={75}
                alt="фото"
              />
            </div>

            <div className={styles.main__container__item_info}>
              <p>{item?.name}</p>
              <span>{item?.original_price?.toLocaleString()} руб.</span>

              <br />

              {[
                item?.colors?.current?.value,
                item?.colors?.other?.map((x: any) => x.value),
              ]
                .flat()
                .map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: "#" + color }}
                  ></div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={extendedProducts.length}
            itemSize={getSize}
            width={width}
            ref={listRef}
            itemData={data}
          >
            {({ data, index, style }) => (
              <div style={style}>
                <Row
                  data={data}
                  index={index}
                  setSize={setSize}
                  windowWidth={windowWidth}
                />
              </div>
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
