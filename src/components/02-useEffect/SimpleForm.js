
import React, { useEffect, useState } from 'react'
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(() => {
        // console.log('hey', )
    }, []);

    useEffect(() => {
        // console.log('name')
    }, [name]);

    useEffect(() => {
        // console.log('email')
    }, [email]);
   

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
        <div className="form-group">
            <h2>SimpleForm</h2>
            <hr/>
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                value={name}
                autoComplete="off"
                onChange={handleInputChange}
            />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    value={email}
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </div>
            {name && <Message message={name}/>}
        </>
    )
}

export default SimpleForm;
