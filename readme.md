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
