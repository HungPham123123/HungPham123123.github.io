document.addEventListener('DOMContentLoaded', async () => {
    const apiEndpoint = 'https://659a6480652b843dea538305.mockapi.io/Product';

    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        renderRecentProducts(data);
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
});