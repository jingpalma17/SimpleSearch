import { asyncLocalStorageSetItem, asyncLocalStorageGetItem } from './Test';
window.asyncLocalStorageSetItem = asyncLocalStorageSetItem;
window.asyncLocalStorageGetItem = asyncLocalStorageGetItem;

// (function () {
//   window.asyncLocalStorage = {
//     get: (key, defaultValue) => asyncLocalStorageGetItem(key),
//     set: (key, value) => {
//       asyncLocalStorageSetItem(key, value);
//     }
//   };
// })();
