import { useEffect, useState } from "react";
// Взял этот hook из моего проекта Barselona Park

// Функция debounce, которая ограничивает частоту вызова функций
// func - функция, которую нужно вызывать с задержкой
// wait - время задержки в миллисекундах
const debounce = (func: (...args: unknown[]) => void, wait: number) => {
	let timeout: ReturnType<typeof setTimeout> | null;
	return (...args: unknown[]) => {
		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func(...args);
		}, wait);
	};
};

// Хук для отслеживания ширины окна браузера
export const useWindowWidth = (): number | null => {
	// Создаем состояние для хранения ширины окна и функцию для его обновления
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	// Используем useEffect для выполнения побочных эффектов, связанных с изменением размера окна
	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			// Функция для обновления ширины окна в состоянии
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};

			// Создаем задержанный обработчик изменения размера окна, используя функцию debounce
			const debouncedHandleResize = debounce(handleResize, 0);

			// Вызываем обработчик при инициализации хука
			debouncedHandleResize();
			// Добавляем слушателя изменения размера окна
			window.addEventListener("resize", debouncedHandleResize);

			// Удаляем слушателя при размонтировании компонента
			return () => {
				window.removeEventListener("resize", debouncedHandleResize);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Возвращаем текущую ширину окна
	return windowWidth;
};
