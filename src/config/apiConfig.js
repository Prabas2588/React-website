export const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchWrapper = async (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);

    if (!response.ok) {
      const errorData = await response.json();
      let errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
 
      switch (response.status) {
        case 400:
          errorMessage = errorData.message || 'Bad Request: Invalid input.';
          break;
        case 401:
          errorMessage = 'Unauthorized: Please log in again.';
          break;
        case 403:
          errorMessage = 'Forbidden: Access Denied.';
          break;
        case 404:
          errorMessage = 'Incorrect username or password';
          break;
        case 500:
          errorMessage = 'Internal Server Error';
          break;
        default:
          errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
          break;
      }
      throw new Error(errorMessage);
    }  
    return {
      status: response.status,
      data: await response.json(),
    };;
  } catch (error) {
    clearTimeout(id);
    if (error.name === 'AbortError' || error.name === 'TypeError') {
      throw new Error('Request timeout. Please try again.');
    }
    throw new Error(error.message || 'Network error or invalid JSON response');
  }
};
