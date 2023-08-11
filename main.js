import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

// Initialisez le carrousel
$('.owl-carousel').owlCarousel({
  // Options du carrousel
    items:1,

});







const images = document.querySelectorAll('.container img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const overlayImage = document.createElement('img');
            overlayImage.src = image.src;
            overlayImage.classList.add('overlay-image');

            overlay.appendChild(overlayImage);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });



const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const contentType = getContentType(filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'application/octet-stream';
  }
}






