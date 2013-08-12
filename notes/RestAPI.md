REST API
======
### What is REST?
REST stands for Representational state transfer.  It is a style of software architecture, which has became a predominant web API design model.

REST-style architectures consistes of clients and servers.  The requests and responses happen between clients and servers are built around the transfer of representations of resources.

A resource is essentially any coherent and meaningful concept.
A representation of a resource is typically a docutment that captures the current or intended state of a resource.

### Constraints of REST architecture
- Client-Server (a uniform interface sperates clients frmo servers)
- Uniform interface (decouple the architecture, enabled independence)
- Stateless (no client context being stored on the server between requests)
- Cacheable (responses must implicity or explicitly define themselved as cachable or not)
- Layered system (has an intermediary server)
- Code on demand (optional.  server can temporarily extend or customize the functionality of a client by the transfer of execuable code.)

### Vocabulary
REST uses HTTP protocol operations. (some uses other features or protoco§ls)
- GET
- POST
- PUT
- PATCH
- DELETE

a RESTful web API is a web API implementated using HTTP and REST principles.  It is a collection of resources with:
- the set of operations supported by the web API using HTTP methods 
- the base URI for the APIs are http://example.com/resources
- Sensible Resource Names (Having sensible resource names or paths (e.g., /posts/23 instead of /api?type=posts&id=23) improves the clarity of what a given request does.)
- the Internet media type of the data supported by the web API. 
