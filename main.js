import path from 'path';

import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import preactToString from 'preact-render-to-string';

import App from './App.jsx';
import page from './page.js';

const server = fastify({ logger: true });

server.register(fastifyStatic, {
	root: path.resolve(__dirname, './static')
});

server.get('/', async (request, reply) => {
	reply.header('content-type', 'text/html; charset=UTF-8');
	const app = new App();
	const html = page(preactToString(app.render()));
	reply.send(html);
});

const start = async () => {
	try {
		await server.listen(3000);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
}

start();