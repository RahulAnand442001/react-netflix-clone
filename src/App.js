import { requests } from "./requests";

// stylesheets
import "./App.css";

// custom components
import Row from "./components/row/row.component.jsx";
import Banner from "./components/banner/banner.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<>
				<Row
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row
					title="Trending Now"
					fetchUrl={requests.fetchTrending}
				/>
				<Row
					title="Top Rated"
					fetchUrl={requests.fetchTopRated}
				/>
				<Row
					title="Action Movies"
					fetchUrl={requests.fetchActionMovies}
				/>
				<Row
					title="Comedy Movies"
					fetchUrl={requests.fetchComedyMovies}
				/>
				<Row
					title="Horror Movies"
					fetchUrl={requests.fetchHorrorMovies}
				/>
				<Row
					title="Romantic Movies"
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Row
					title="Documentaries"
					fetchUrl={requests.fetchDocumentaries}
				/>
			</>
		</div>
	);
}

export default App;
