function asyncLocalStorageSetItem(key, value) {
    return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
    });
}
function asyncLocalStorageGetItem(key) {
    return Promise.resolve().then(function () {
        return localStorage.getItem('search-items');
    });
}
//# sourceMappingURL=Test.js.map