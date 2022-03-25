import { client, baseUrl } from "../../../services";

const api = {
  marvel: (params: object, point: string) => {
    return new Promise((resolve, reject) => {
      return client()
        .get(`${baseUrl}/v1/public/${point}`, {params})
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};

export default api;
