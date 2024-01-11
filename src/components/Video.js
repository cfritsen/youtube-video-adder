import React from 'react'

//-----------------------
export default function Video(props){
    const {videoLink} = props;

    return (
        <div className='video'>
            <VideoFormatter link={videoLink} />
        </div>
    )
}
//------------------------

const VideoFormatter = prop => {
    const {link} = prop;
    const vidID = link.slice(32);
    const source = `https://www.youtube.com/embed/${vidID}`;

    return (
    <iframe width="560" height="315" src={source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )
}
