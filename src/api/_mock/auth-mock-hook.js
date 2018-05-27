
export const AuthMockHook = {
    before: {
        create(hook) {
            hook.result = {
                credentials: {
                    serverkey: 'serverkey',
                    serverpass: 'serverpass',
                    database: 'database',
                    username: 'username',
                    password: 'password',
                    accessToken: 'accessToken'
                }
            };
        }
    }
};

export default AuthMockHook;