
const fetchApi = async (url, option) => {
    let resJSON = {success : false}
    try{
        const response = await fetch(url, option)

        // console.log('responce fetchApi ', url, option, response);

        if(response.status === 200 || response.status === 201){
            resJSON.success = true;
        }
        resJSON.result = await response.json();
        
    }catch(err){
        console.log('fetch error ', err)
        resJSON.message = err.message
    }
    // console.log('fetch success ', resJSON)
    
    return resJSON;
}

export default class FetchApi{

    headers = {
    }

    constructor(url){
        this.url = url;
    }

    async get(endPoint, header){
        return await fetchApi(this.url+endPoint, {
            method : 'GET',
            headers : Object.assign(header, this.headers)
        });
    }

    async post(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'POST',
            headers: Object.assign(this.headers, header),
            body: body
        })
    }

    async putFormData(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'PUT',
            headers: Object.assign(header, this.headers),
            body: body
        })
    }

    async put(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'PUT',
            headers: Object.assign(header, this.headers),
            body: body
        })
    }
    async patch(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'PATCH',
            headers: Object.assign(header, this.headers),
            body: body
        })
    }
    async delete(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'DELETE',
            headers: Object.assign(header, this.headers),
            body: body
        })
    }

    // async delete(endPoint, header){
    //     return await fetchApi(this.url+endPoint, {
    //         method: 'DELETE',
    //         headers: Object.assign(header, this.headers)
    //     })
    // }

    async deleteFavContact(endPoint, header, body){
        return await fetchApi(this.url+endPoint, {
            method: 'DELETE',
            headers: Object.assign(header, this.headers),
            body: body
        })
    }
}
