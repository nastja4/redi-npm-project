// import axios from 'axios';

// const config = {
//   headers: {
//     'x-api-key': 'live_dQ84JD28V4gESpUwuk5wJqUglyWZGoXLsCMRltfov7oM4wc0PwaZGAiBGWEhCW8G'
//   }
// }

// axios.get('https://api.thecatapi.com/v1/images/0XYvRd7oD', config)
//  .then(response => {
//   console.log(response.data);
//  })
//  .catch(error => {
//   console.error(error);
//  }); 


// CDN (Content Delivery Network) is a system of distributed servers that deliver web content, such as images, videos, stylesheets, JavaScript files, and more
import axios from 'https://cdn.skypack.dev/axios';

document.addEventListener('DOMContentLoaded', function() {
  const config = {
    headers: {
      'x-api-key': 'live_dQ84JD28V4gESpUwuk5wJqUglyWZGoXLsCMRltfov7oM4wc0PwaZGAiBGWEhCW8G'
    }
  };

  axios.get('https://api.thecatapi.com/v1/images/0XYvRd7oD', config)
  .then(response => {
    const catImageUrl = response.data.url;
    document.getElementById('catPic').src = catImageUrl;
  })
  .catch(error => {
    console.error(error);
  }); 
});