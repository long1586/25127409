import './App.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to fetch rooms');
  }
  return response.json();
});

function Room(props) {
  return (
    <li>
      Room {props.info.room_id}: {props.info.name}, price: {props.info.price}
    </li>
  );
}

function App() {
  const api = window.location.hostname.endsWith('.app.github.dev')
    ? `${window.location.protocol}//${window.location.hostname.replace(/-3000(?=\.app\.github\.dev$)/, '-8080')}/room`
    : `http://${window.location.hostname}:8080/room`;
  const { data, error, isLoading } = useSWR(api, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h3>The quick brown fox jumps over the lazy dog</h3>
        <ul>
          {data.rooms.map((item) => (
            <Room key={item.room_id} info={item} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
