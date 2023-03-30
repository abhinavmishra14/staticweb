<%@ page session="false" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Iframe demo</title>
	<style>
		iframe {
			width: 100%;
			height: 500px;
		}
	</style>
</head>
<body>
	<h3>Share in iFrame from localhost</h3>
    <iframe src="https://alfresco.local.com:80/share/page/" name="share-canvas"></iframe>
</body>
</html>