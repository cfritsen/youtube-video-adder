import React from 'react'
import Video from './Video'


export default function VideoList(props){
    const {videoLinkList} = props;

    return (
        <div className='video-list'>
            {videoLinkList.map(link => (<Video videoLink={link} />))}
        </div>
    )
}