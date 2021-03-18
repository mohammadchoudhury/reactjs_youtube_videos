import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("ReactJS");
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", { params: { q: term } });
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "1em" }}>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid stackable">
					<div className="ui row">
						<div className="sixteen wide tablet ten wide computer column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="sixteen wide tablet six wide computer column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>{" "}
			</div>
		);
	}
}

export default App;
