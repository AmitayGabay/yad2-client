import axios from "axios"
import { TOKEN_KEY } from "../constant/string";

export const apiGet = async(_url) => {
        try {
            let resp = await axios.get(_url, {
                headers: {
                    "apiKey": localStorage[TOKEN_KEY],
                    'content-type': "application/json"
                }
            })
            return resp;
        } catch (err) {
            throw err;
        }
 }
export const apiPost = async(_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'POST',
            data: JSON.stringify(_body),
            headers: {
                "apiKey": localStorage[TOKEN_KEY],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const apiPut = async(_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'PUT',
            data: JSON.stringify(_body),
            headers: {
                "apiKey": localStorage[TOKEN_KEY],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const apiDelete = async(_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'DELETE',
            data: JSON.stringify(_body),
            headers: {
                "apiKey": localStorage[TOKEN_KEY],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const apiPetch = async(_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'PETCH',
            data: JSON.stringify(_body),
            headers: {
                "apiKey": localStorage[TOKEN_KEY],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}