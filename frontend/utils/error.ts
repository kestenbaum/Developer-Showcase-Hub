const toError = (error: unknown) => {
    if (error instanceof Error) return error;
    return new Error(String(error));
}

const getErrorMessage = (error: unknown): string => {
    return toError(error).message
}

const handleApiError = (e: unknown): never => {
    const error = toError(e);

    if (process.env.NODE_ENV !== 'test') {
        console.error('API Error:', error);
    }

    throw error;
};

export { toError, getErrorMessage, handleApiError };