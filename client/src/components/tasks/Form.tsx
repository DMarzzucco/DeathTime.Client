import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth.context";
import { ConfirmMess, ErrorInput } from "../ui/comps.ui";
import { DateProps } from "../../interface";

const FormUsers: React.FC = () => {
    const { ...pre } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<DateProps>()
    const onSubmit = handleSubmit(async (data) => { pre.fetchCreater(data) })
    return (
        <form onSubmit={onSubmit} className="flex py-3 px-4 m-2 flex-col justify-center items-center  rounded-xl shadow-md shadow-red-600">
            <input type="text" placeholder="Name"
                {...register("name", { required: true })}
            />
            {errors.name && <ErrorInput title="Name" />}
            <input type="text" placeholder="Age"
                {...register("age", { required: true })}
            />
            {errors.age && <ErrorInput title="Age" />}
            <input type="text" placeholder="Email"
                {...register("email", { required: true })}
            />
            {errors.email && <ErrorInput title="Email" />}
            <button className="my-2" type="submit">SEND</button>
            {pre.confirm && <ConfirmMess />}
        </form>
    )
}
export default FormUsers;