import axios from 'axios';

// const apiClient = axios.create({
//     baseURL: 'https://gorest.co.in/public/v2/users',
//     headers: {'Authorization': 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'}
// });

export const fetchData = async () => {
    try {
        const response = await axios.get(
            'https://gorest.co.in/public/v2/users',{
            headers: {'Authorization': 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'}}
        )
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addUser = async (data) => {
    try {
        const response = await axios.post(
            'https://gorest.co.in/public/v2/users',
            data,{
            headers: {'Authorization': 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'}}
        )
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deleteUser = async (id) => {
    try {
   
        // Make a DELETE request to the API with the given ID
        const response = await axios.delete('https://gorest.co.in/public/v2/users/' + id,{
           headers: {'Authorization': 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'}
        });
        
        return response.data;
     } catch (error) {
     
        // Log any errors that occur
        console.error(error);
     }
};
export const fetchRequestedData = async (page_num,count) => {
    console.log(page_num);
    console.log(count);
    try {
        const response = await axios.get(
            'https://gorest.co.in/public/v2/users?page='+page_num+'&per_page='+count,{
            headers: {'Authorization': 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'}}
        )
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
