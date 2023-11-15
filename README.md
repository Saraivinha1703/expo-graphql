# Problems that GraphQL solve

1.  Overfetching. With GraphQL we can filter the amount of data that is returned from our endpoints.
2.  Underfetching. We can pick all the data that we need with only one request.

GraphQL sets what data we need in the front-end, instead of the back-end setting a lot of unnecessary data, very usefull for big applications, or small and scalable
applications to be more performatic.

# Dificulties with GraphQL

1.  Have a diferent level of complexity.
2.  Harder to cache, since our browsers are designed to attend to http requests made by REST APIs and they do it, but with GraphQL we have to cache locally.
