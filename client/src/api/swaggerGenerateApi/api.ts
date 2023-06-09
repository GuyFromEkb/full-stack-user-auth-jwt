/* tslint:disable */
/* eslint-disable */
/**
 * JWT AUTH USER
 * ITS API Swagger
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AuthUserBody
 */
export interface AuthUserBody {
    /**
     * 
     * @type {string}
     * @memberof AuthUserBody
     */
    'email': string;
    /**
     * unencrypted user\'s password
     * @type {string}
     * @memberof AuthUserBody
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface ResponseBaseUserBody
 */
export interface ResponseBaseUserBody {
    /**
     * 
     * @type {string}
     * @memberof ResponseBaseUserBody
     */
    'email': string;
    /**
     * user Id
     * @type {string}
     * @memberof ResponseBaseUserBody
     */
    'id': string;
    /**
     * is user Activated
     * @type {boolean}
     * @memberof ResponseBaseUserBody
     */
    'isActivated': boolean;
    /**
     * ссылка для активации пользователя
     * @type {string}
     * @memberof ResponseBaseUserBody
     */
    'activateLink'?: string;
}
/**
 * 
 * @export
 * @interface ResponseToken
 */
export interface ResponseToken {
    /**
     * 
     * @type {string}
     * @memberof ResponseToken
     */
    'accessToken': string;
}
/**
 * 
 * @export
 * @interface ResponseUser
 */
export interface ResponseUser {
    /**
     * 
     * @type {ResponseBaseUserBody}
     * @memberof ResponseUser
     */
    'user': ResponseBaseUserBody;
    /**
     * 
     * @type {ResponseToken}
     * @memberof ResponseUser
     */
    'token': ResponseToken;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'isActivate': boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id': string;
}

/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)
         * @summary Получение текущего пользователя по accessToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOwnUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/getOwnUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * LoginUser
         * @summary Логин юзера
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: async (authUserBody: AuthUserBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authUserBody' is not null or undefined
            assertParamExists('loginUser', 'authUserBody', authUserBody)
            const localVarPath = `/user/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authUserBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * удаляет аксес пользователя, чистит cookie
         * @summary logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены
         * @summary Обновления access Токена
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshAccess: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/refreshAccess`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Создание пользователя
         * @summary Создание нового пользователя
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (authUserBody: AuthUserBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authUserBody' is not null or undefined
            assertParamExists('registerUser', 'authUserBody', authUserBody)
            const localVarPath = `/user/registration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authUserBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)
         * @summary Получение текущего пользователя по accessToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOwnUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseBaseUserBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOwnUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * LoginUser
         * @summary Логин юзера
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginUser(authUserBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * удаляет аксес пользователя, чистит cookie
         * @summary logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены
         * @summary Обновления access Токена
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshAccess(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshAccess(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Создание пользователя
         * @summary Создание нового пользователя
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerUser(authUserBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)
         * @summary Получение текущего пользователя по accessToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOwnUser(options?: any): AxiosPromise<ResponseBaseUserBody> {
            return localVarFp.getOwnUser(options).then((request) => request(axios, basePath));
        },
        /**
         * LoginUser
         * @summary Логин юзера
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser(authUserBody: AuthUserBody, options?: any): AxiosPromise<ResponseUser> {
            return localVarFp.loginUser(authUserBody, options).then((request) => request(axios, basePath));
        },
        /**
         * удаляет аксес пользователя, чистит cookie
         * @summary logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options?: any): AxiosPromise<void> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены
         * @summary Обновления access Токена
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshAccess(options?: any): AxiosPromise<ResponseToken> {
            return localVarFp.refreshAccess(options).then((request) => request(axios, basePath));
        },
        /**
         * Создание пользователя
         * @summary Создание нового пользователя
         * @param {AuthUserBody} authUserBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser(authUserBody: AuthUserBody, options?: any): AxiosPromise<ResponseUser> {
            return localVarFp.registerUser(authUserBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)
     * @summary Получение текущего пользователя по accessToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getOwnUser(options?: AxiosRequestConfig): AxiosPromise<ResponseBaseUserBody>;

    /**
     * LoginUser
     * @summary Логин юзера
     * @param {AuthUserBody} authUserBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    loginUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig): AxiosPromise<ResponseUser>;

    /**
     * удаляет аксес пользователя, чистит cookie
     * @summary logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    logout(options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены
     * @summary Обновления access Токена
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    refreshAccess(options?: AxiosRequestConfig): AxiosPromise<ResponseToken>;

    /**
     * Создание пользователя
     * @summary Создание нового пользователя
     * @param {AuthUserBody} authUserBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    registerUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig): AxiosPromise<ResponseUser>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)
     * @summary Получение текущего пользователя по accessToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getOwnUser(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getOwnUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * LoginUser
     * @summary Логин юзера
     * @param {AuthUserBody} authUserBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public loginUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).loginUser(authUserBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * удаляет аксес пользователя, чистит cookie
     * @summary logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public logout(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены
     * @summary Обновления access Токена
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public refreshAccess(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).refreshAccess(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Создание пользователя
     * @summary Создание нового пользователя
     * @param {AuthUserBody} authUserBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public registerUser(authUserBody: AuthUserBody, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).registerUser(authUserBody, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Получает всех зарегистрированых пользователей
         * @summary что бы получить пользователей, нужно быть авторизованным
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Получает всех зарегистрированых пользователей
         * @summary что бы получить пользователей, нужно быть авторизованным
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ResponseBaseUserBody>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Получает всех зарегистрированых пользователей
         * @summary что бы получить пользователей, нужно быть авторизованным
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsers(options?: any): AxiosPromise<Array<ResponseBaseUserBody>> {
            return localVarFp.getAllUsers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Получает всех зарегистрированых пользователей
     * @summary что бы получить пользователей, нужно быть авторизованным
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getAllUsers(options?: AxiosRequestConfig): AxiosPromise<Array<ResponseBaseUserBody>>;

}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
    /**
     * Получает всех зарегистрированых пользователей
     * @summary что бы получить пользователей, нужно быть авторизованным
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getAllUsers(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getAllUsers(options).then((request) => request(this.axios, this.basePath));
    }
}


