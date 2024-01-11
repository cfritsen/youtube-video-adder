import React, {useState} from 'react'
import VideoList from './VideoList.js'
import Form from './Form.js'


export default function VideoAdder(){
    const [videoLinkList, setVideoLinkList] = useState([])

    const addLink = link => {
        setVideoLinkList([...videoLinkList, link])
    }

    return (
        <div>
            <Form addLink={addLink} />
            <VideoList videoLinkList={videoLinkList} />
        </div>
    )
}