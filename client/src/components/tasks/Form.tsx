import React from "react";
import { useForm } from "react-hook-form";
import { DateProps } from "../../interface";
import { useAuth } from "../../context/Auth.context";

const FormUsers: React.FC<{ data: DateProps }> = ({ data }) => {
    const { ...pre } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: data?.name,
            age: data?.age,
            email: data?.email
        }
    })
    const onSubmit = handleSubmit(async (data) => { pre.fetchCreater(data) })
    return (
        <form onSubmit={onSubmit} className="flex py-3 px-4 m-2 flex-col justify-center items-center border border-slate-400 rounded-xl shadow-lg shadow-slate-600">
            <input type="text" placeholder="Name"
                {...register("name", { required: true })}
            />
            {errors.name && <h1>${data.name} is required</h1>}
            <input type="text" placeholder="Age"
                {...register("age", { required: true })}
            />
            {errors.age && <h1>${data.age} is required</h1>}
            <input type="text" placeholder="Email"
                {...register("email", { required: true })}
            />
            {errors.email && <h1>${data.email} is required</h1>}
            <button className="my-2" type="submit">SEND</button>
            {pre.confirm && <p>Usario creado</p>}
        </form>
    )
}
export default FormUsers;