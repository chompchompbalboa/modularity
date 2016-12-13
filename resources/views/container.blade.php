<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link rel="shortcut icon" href="" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="/css/hovers.css">
    <title>{{ $data['title'] }}</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="/js/content-index.js"></script>
  </body>
</html>