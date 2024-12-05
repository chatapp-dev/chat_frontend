export interface FetchResponse<T> {
    data: T
    status: number
    statusText: string
    headers: Headers
}

export interface FetchConfig  extends Omit<RequestInit, 'body' | 'method'>  {
    params?:URLSearchParams
}

type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[];

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

class Fetcher {
    private readonly BASE_URL:string;

    constructor(baseUrl:string ) {
        this.BASE_URL = baseUrl;
    }

    private async request<T>(method: FetchMethod, url: string, config: FetchConfig & {body?:Json} = {}): Promise<FetchResponse<T>> {
        const { params, headers:configHeaders , body, ...configRest } = config;

        const headers = {
            'Content-Type': 'application/json',
            ...configHeaders
        }
        const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
        const fullUrl = `${this.BASE_URL}${url}` + queryString;


        const response = await fetch(fullUrl, {
            method,
            headers,
            body:  body ? JSON.stringify(body) : undefined,
            ...configRest
        });

        const data = await response.json();

        return {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        };
    }

    get<T>(url: string, config?: FetchConfig): Promise<FetchResponse<T>> {
        return this.request<T>('GET', url, config);
    }

    post<T>(url: string, body: Json, config?: FetchConfig): Promise<FetchResponse<T>> {
        return this.request<T>('POST', url, { ...config, body });
    }

    put<T>(url: string, body: Json, config?: FetchConfig): Promise<FetchResponse<T>> {
        return this.request<T>('PUT', url, { ...config, body });
    }

    patch<T>(url: string, body: Json, config?: FetchConfig): Promise<FetchResponse<T>> {
        return this.request<T>('PATCH', url, { ...config, body });
    }

    delete<T>(url: string, config?: FetchConfig): Promise<FetchResponse<T>> {
        return this.request<T>('DELETE', url, config);
    }
}

export const fetcher = new Fetcher('');