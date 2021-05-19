
import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';
import Message from './Message';

const FormWithCustomHook = () => {
    const [{name, email, password}, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('e', e)

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h2>FormWithCustomHook</h2>
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
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </div>
            {name && <Message message={name}/>}

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default FormWithCustomHook;
