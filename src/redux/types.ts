import { store } from "./store";

export interface ReduxActionInterface {
	type: string;//описує подію, що сталося(update user, decrement counter etc), має бути завжди
	payload: any;//все що завгодно що можна передати, будь-які дані(напр нове значення для counter), можливість передати інфо, але можна і не передавати

}

export type ReduxStoreType = typeof store;

export interface TodoInterface {
	id: number,
	title: string;
	isDone: boolean;
}

export interface TodoInteface {
    id: number,
    title: string,
    isDone: boolean
}