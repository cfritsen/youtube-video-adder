import React, {useState} from 'react'
import VideoList from './VideoList.js'
import Form from './Form.js'
import './VideoAdder.css'


export default function VideoAdder(){
    const [videoLinkList, setVideoLinkList] = useState([])

    const addLink = link => {
        setVideoLinkList([...videoLinkList, link])
    }

    return (
        <div className='container'>
            <Form addLink={addLink} />
            <VideoList videoLinkList={videoLinkList} />
        </div>
    )
}