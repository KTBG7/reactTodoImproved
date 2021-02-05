import axios from "axios"

const executeHelloWorldService = () => {
    return axios.get('http://localhost:8080/hello-world');
}

const executeHelloWorldBeanService = () => {
    return axios.get('http://localhost:8080/hello-world-bean');
}

const executeHelloWorldPathService = (name) => {
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
}

export {executeHelloWorldService, executeHelloWorldBeanService, executeHelloWorldPathService}