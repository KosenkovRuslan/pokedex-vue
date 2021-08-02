export type ListResponse<T> = {
    count: number,
    results: T[],
    next: string | null,
    previous: string | null
}

export type Pokemon = {
    name: string
    url: string
}
