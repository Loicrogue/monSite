import React, { useRef, useState } from "react";
import music from '../assets/music/background.mp3';

const BackgroundMusicComponent: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch((err) => {
                console.log("Lecture bloquée :", err);
            });
            setIsPlaying(true);
        }
    };

    const buttonColor = isPlaying ? "#e74c3c" : "#2ecc71";
    const buttonShadow = isHovered ? `0 0 15px 3px ${buttonColor}` : "none";

    return (
        <div className="flex justify-center mt-4">
            <audio ref={audioRef} loop>
                <source src={music} type="audio/mp3" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <button
                onClick={toggleMusic}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: buttonColor,
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: buttonShadow,
                    outline: "none",
                }}
            >
                {isPlaying ? "Arrêter la musique" : "Lancer la musique"}
            </button>
        </div>
    );
};

export default BackgroundMusicComponent;
