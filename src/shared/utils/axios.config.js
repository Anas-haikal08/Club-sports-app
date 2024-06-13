import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/', // Replace 'YOUR_BASE_URL_HERE' with your actual base URL
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data) {
      let errorMessage = '';
      if (typeof error.response.data === 'string') {
        errorMessage = error.response.data;
      } else if (error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      alert(errorMessage); // Alert the error message from the backend
    } else {
      alert('Network Error'); // Alert for network errors
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
