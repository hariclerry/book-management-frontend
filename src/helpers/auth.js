export const isLogin = () => {
    if (localStorage.getItem("my-token")) {
        return true;
    }

    return false;
}