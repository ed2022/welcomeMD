// importing libraries 
const http = require('http'); // the process of building, sending, and receiving HTTP requests and responses
const fs = require('fs'); // file systems 
const path = require('path'); // 

const server = http.createServer((req, res) => {
    // Map the URL path to the corresponding file
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Determine the content type based on file extension
        const extname = path.extname(filePath);
        let contentType = 'text/html'; // Default content type
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }
        // Read the file and send it as the response
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.setHeader('Content-Type', contentType);
                res.end(data);
            }
        });
    } else {
        // RETURN: File not found
        res.statusCode = 404;
        res.end('File not found');
    }
});

// Defining a port for the app 
const PORT = process.env.PORT || 3000;
// This listens to the port and sends a confirmation on the terminal/console
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
