import axios from 'axios'
import md5 from 'js-md5'

//Your public key f5fd1cfb60b5261a69440253d54272fe
//Your privat key 02cdd84147fee8f349cf889e4bf59f9060ff5f48

export const client = () => {
    const PUBLIC_KEY = 'f5fd1cfb60b5261a69440253d54272fe'
    const PRIVATE_KEY = '02cdd84147fee8f349cf889e4bf59f9060ff5f48'
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    const defaultOptions = {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
    }
    return {
        get: (url: string, options = {}) => axios.get((url + `?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`), { ...defaultOptions, ...options }),
        post: (url: string, data: any, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url: string, data: any, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        patch: (url: string, data: any, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
        delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options })
    }
}



export const baseUrl = 'https://gateway.marvel.com'