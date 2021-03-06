import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "33de81bf-5997-4368-9d7f-f5ad43a8b3a2"
    }
})


export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return ProfileAPI.getProfile(userId)
    }

}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    addPhoto(file) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            }
        )
    }
}


export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {

        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {

        return instance.delete(`auth/login`)
    }

}

