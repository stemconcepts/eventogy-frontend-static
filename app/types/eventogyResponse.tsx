export default interface EventogyResponse<T> {
    success: boolean,
    code: number,
    message: string,
    pagination: {
        perPage: number,
        currentPage: number,
        lastPage: number,
        total: number
    },
    data : T
}