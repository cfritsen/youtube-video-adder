import React, {useState} from 'react'


export default function Form(props){
    const {addLink} = props;
    const [form, setForm] = useState('');

    const changeHandler = evt => {
        setForm(evt.target.value)
    }
    const submitHandler = evt => {
        evt.preventDefault();
        addLink(form)
        setForm('')
    }

    return (
        <form onSubmit={submitHandler} onChange={changeHandler}>
            <label for='link'>Add YouTube Video Using Link:</label><br />
            <input type='text' id='link' value={form} />
            <input type='submit' value='Add Video' />
        </form>
    )
}