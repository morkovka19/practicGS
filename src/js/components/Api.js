export default class Api{
    constructor(url){
        this._url = url;
    }

    getCards(){
        return fetch(url).then(res => this._getResponseDate(res));
    };

    _getResponseDate(res){
        if (!res.ok){
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    };
}