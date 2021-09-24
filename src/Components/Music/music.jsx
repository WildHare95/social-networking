import './index.css'
import {useState, useEffect} from 'react';
import Player from './Player';
import song1 from '../../assets/music/Song1.mp3'
import song2 from '../../assets/music/Song2.mp3'

function Music() {
    const [songs] = useState([
        {
            title: "Song 1",
            artist: "Artist 1",
            img_src: "https://upload.wikimedia.org/wikipedia/ru/c/c3/El_Problem%C3%A1.jpg",
            src: song1
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            img_src: "https://upload.wikimedia.org/wikipedia/ru/c/c3/El_Problem%C3%A1.jpg",
            src: song2
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    );
}
export default Music;
