import { tmdbService } from '@/service/tmdbService.ts';
import { LoginInfo } from '@/types/LoginInfo.ts';

export const postAuthToken = (logInInfo: LoginInfo) => {
    return tmdbService.getAuthToken(logInInfo);
};
