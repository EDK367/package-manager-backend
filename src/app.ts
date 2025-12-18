import http from 'node:http';

export async function starterServer() {
    const PORT = process.env.PORT || 3000;

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'package-manager-backend is running with TypeScript native!',
            status: 'success',
            timestamp: new Date().toISOString()
        }));
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}