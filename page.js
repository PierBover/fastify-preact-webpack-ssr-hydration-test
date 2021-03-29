export default function (body) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0" />
				<title>Hello Preact SSR</title>
			</head>
			<body>
				<div id="app">${body}</div>
				<script src="/App.js"></script>
			</body>
		</html>
	`;
}