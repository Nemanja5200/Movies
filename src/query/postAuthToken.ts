import { tmdbService } from '@/service/tmdbService.ts';
import { LoginInfo } from '@/types/LoginInfo.ts';

export const postAuthToken = (logInInfo: LoginInfo) => {
    console.log(tmdbService.getAuthToken(logInInfo));
    return tmdbService.getAuthToken(logInInfo);
};
