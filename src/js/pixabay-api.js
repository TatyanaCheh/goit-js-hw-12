import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const articlesApi = axios.Axios({
    baseURL: 'https://pixabay.com/',
})

export async function getImages(inputValue, currentPage, perPage) {
    try{
        const params = {
            key: '44652974-093c0b9338f58db6242e87a44',
            q: inputValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: currentPage,
            per_page: perPage,       
};

const res = await articlesApi.get('api/', { params });
return res.data;
} catch (error) {
    iziToast.error({
        title: 'Error',
          message: `${err}`,
          layout: 2,
          displayMode: 'once',
          backgroundColor: '#ef4040',
          progressBarColor: '#B51B1B',
          position: 'topRight',
    });
}
}