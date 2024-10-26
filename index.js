import express from 'express';

const app = express();
const PORT = 3000;

const greet = () => "Hello World";

app.get('/', (req, res) => {
	res.send(greet());
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
