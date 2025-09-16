export enum ErrorCode {
    UNAUTHORIZED = '401',
    NETWORK_ERROR = 'Network Error',
    INVALID_CODE = 'Code must be a 6-digit number',
}

export enum ErrorMessage {
    UNAUTHORIZED = 'Incorrect email or password',
    NETWORK_ERROR = 'Server connection error',
    INVALID_CODE = 'Code must be a 6-digit number',
}

export const getErrorMessage = (error: string): string => {
    if (error.includes(ErrorCode.UNAUTHORIZED)) {
        return ErrorMessage.UNAUTHORIZED;
    }
    if (error.includes(ErrorCode.NETWORK_ERROR)) {
        return ErrorMessage.NETWORK_ERROR;
    }
    if (error.includes(ErrorCode.INVALID_CODE)) {
        return ErrorMessage.INVALID_CODE;
    }
    return error;
};
