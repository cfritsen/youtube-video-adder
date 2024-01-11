import React from 'react'
import Video from './Video'


export default function VideoList(props){
    const {videoLinkList} = props;

    return (
        <div>
            <Video videoLink="https://www.youtube.com/watch?v=n61ULEU7CO0" />
            {/* Map Video using LinkList here */}
        </div>
    )
}