export const msalConfig = {
    auth: {
        clientId: "<client id>",
        authority: "https://login.microsoftonline.com/<tenant id>",
        redirectUri: "http://localhost:50725/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};
export const loginRequest = {
    scopes: ["User.Read"], // Microsoft Graph scope for profile info
};