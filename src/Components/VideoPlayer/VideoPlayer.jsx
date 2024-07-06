import "./VideoPlayer.css";
import video from "../../assets/sample.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
    const playerRef = useRef(null);

    const closePlayer = (e) => {
        if (e.target === playerRef.current) {
            setPlayState(false);
        }
    };

    return (
        <div
            className={`video-player ${playState ? "" : "hide"}`}
            ref={playerRef}
            onClick={closePlayer}
        >
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
