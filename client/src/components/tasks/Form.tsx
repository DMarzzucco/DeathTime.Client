import axios from "axios";
import React, { useState } from "react";
import { InptComps } from "./Form/comp.Form";

const FormUsers: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [confirm, setConfirm] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const handleInput = (op: "name" | "email" | "age") => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        switch (op) {
            case "name":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
            case "email":
                setEmail(value)
                break;
        }
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/api/users', { name, email, age });
            if (res.status === 403) {
                setError(true)
            }
            setAge('')
            setName('')
            setEmail('')
            setConfirm(true)
            const timer = setTimeout(() => { setConfirm(false); window.location.reload() }, 500)
            return () => clearTimeout(timer)
        } catch (error) {
            alert('Error creating user')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex py-3 px-4 m-2 flex-col justify-center items-center border border-slate-400 rounded-xl shadow-lg shadow-slate-600">
            <InptComps
                placeholder="name"
                htmlFor="name"
                title="Name"
                value={name}
                onChange={handleInput("name")}
            />
            <InptComps
                placeholder="age"
                htmlFor="age"
                title="Age"
                value={age}
                onChange={handleInput("age")}
            />
            <InptComps
                placeholder="email"
                htmlFor="email"
                title="Email"
                value={email}
                onChange={handleInput("email")}
            />
            <button className="my-2" type="submit">SEND</button>
            {error && <p>Tiempo expirado</p>}
            {confirm && <p>Usario creado</p>}
        </form>
    )
}
export default FormUsers;