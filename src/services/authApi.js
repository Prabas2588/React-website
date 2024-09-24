import { BASE_URL, fetchWrapper } from '../config/apiConfig';

export const login = async (username, password) => {
  const url = `${BASE_URL}/Auth`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };

  try {
    const response = await fetchWrapper(url, options, 5000); 
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async (token) => {
    const url = `${BASE_URL}/products`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
    };
  
    try {
      const response = await fetchWrapper(url, options, 5000);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };