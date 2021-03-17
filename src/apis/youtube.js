import axios from "axios";

const KEY = "AIzaSyB4qUsQuy1h5y1WnKymx-woNexTCb81Mpk";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		safeSearch: "strict",
		key: KEY
	},
});
