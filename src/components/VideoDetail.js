import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div className="ui icon message">
				<i className="notched circle loading icon"></i>
				<div className="content">
					<div className="header">Just one second</div>
					<p>We're fetching that content for you.</p>
				</div>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

	return (
		<div>
			<div className="ui embed">
				<iframe
					title="Video Player"
					src={videoSrc}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
