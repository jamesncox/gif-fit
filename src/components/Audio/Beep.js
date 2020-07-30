import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import BeepSound from '../../sounds/Double start beep.mp3'

export default function Beep() {

    return (
        <ReactAudioPlayer
            src={BeepSound}
            volume={.5}
            autoPlay={true}
            loop={false}
        />
    )
}