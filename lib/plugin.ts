'use strict';
import { Options, MSALBasic } from './src/types';
import { MSAL } from './src/main';
import { mixin } from "./mixin";
export const msalMixin = mixin;

export default class msalPlugin {
    static install(app: any, options: Options): void {
        app.config.globalProperties.$msal = new msalPlugin(options, app);
    }
    constructor(options: Options, app: any = undefined) {
        const msal = new MSAL(options);
        if (app && options.framework && options.framework.globalMixin) {
            app.mixin(mixin);
        }
        const exposed: MSALBasic = {
            data: msal.data,
            signIn() { msal.signIn(); },
            async signOut() { await msal.signOut(); },
            isAuthenticated() { return msal.isAuthenticated(); },
            async acquireToken(request, retries = 0) { return await msal.acquireToken(request, retries); },
            async msGraph(endpoints, batchUrl) { return await msal.msGraph(endpoints, batchUrl) },
            saveCustomData(key: string, data: any) { msal.saveCustomData(key, data); }
        };
        return exposed;
    }
}
