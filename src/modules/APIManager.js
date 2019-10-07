const remoteURL = "http://localhost:8088"

export default {
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(result => result.json())
    },

    delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    }

}