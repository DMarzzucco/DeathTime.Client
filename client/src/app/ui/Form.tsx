"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorInput } from "./components/ui.compst";
import { User } from "@/interfaces";
import { CreateResponse } from "../service/api.service";
import { useRouter } from "next/navigation";

export const FormUsers: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>()
    const Router = useRouter()
    const onSubmit = handleSubmit(async (data) => {
        await CreateResponse(data)
        Router.refresh()
    })
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
            {/* {pre.confirm && <ConfirmMess />} */}
        </form>
    )
}
