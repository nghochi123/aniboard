export default function addLocalStorage(key, object){
    const stringified = JSON.stringify(object);
    localStorage.setItem(key, stringified);
}