# MyShop room app

Start the application from this directory with:

```sh
docker compose up --build
```

Compose starts PostgreSQL first and waits for its health check before starting
the API. The API applies database migrations and seeds before starting the
server, then the frontend starts after the API container.

Open <http://localhost:3000> to view the room list. The API is available at
<http://localhost:8080/room>.

Copy `.env.sample` to `.env` and set the PostgreSQL values before starting the
stack. `REACT_APP_API_URL` is optional; when blank, the frontend uses localhost
outside Codespaces and derives the API URL from the forwarded port inside
Codespaces.

DO NOTE: this project I understood nothing but the fundamentals of how it works. Basically 3 components that works like a hotel receptionist: the database storing the rooms' details, the API as the receptionist that requests data and return it to the frontend which is like the receptionist desk.
Other than that, the codes are aided with assistant, and I might not be able to annotate them all.
