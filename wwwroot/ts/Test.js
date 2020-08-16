function asyncLocalStorageSetItem(key, value) {
    return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
    });
}
function asyncLocalStorageGetItem(key) {
    return Promise.resolve().then(function () {
        return localStorage.getItem(key);
    });
}
//# sourceMappingURL=Test.js.map