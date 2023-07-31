import axios from "axios";

const internalServer = axios.create({
    baseURL: "http://localhost:3000/api",
});

internalServer.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error("API call error: ", error);
        return Promise.reject(error);
    }
);

export { internalServer };
