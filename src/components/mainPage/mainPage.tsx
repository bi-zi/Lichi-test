"use client";
import styles from "./style.module.scss";
import Image from "next/image";

interface MainPageProps {
  data: any;
}

export const MainPage = ({ data }: MainPageProps) => {
  const products = data.api_data.aProduct;
  console.log(products);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        {products.map((item: any, i: any) => (
          <div key={i} className={styles.main__container__item}>
            <div className={styles.main__container__item_image}>
              <Image
                src={item.photos[0].big}
                fill
                sizes="1"
                priority
                quality={75}
                alt="фото"
              />
            </div>

            <div className={styles.main__container__item_info}>
              <p>{item.name}</p>
              <span>{item.original_price.toLocaleString()} руб.</span>

              <br />

              {[
                item.colors.current?.value,
                item.colors.other?.map((x: any) => x.value),
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
    </div>
  );
};
