import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

