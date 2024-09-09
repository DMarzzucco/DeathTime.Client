import React, { useEffect, useState } from "react";
import {  NumberDate } from "../ui/comps.ui";

const CounterLimit: React.FC = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const formatNumber = (num: number) => num.toString().padStart(2, '0');
    return (
        <div className="flex flex-col my-4 justify-center items-center w-full">
            <div className=" flex flex-row justify-center items-center">
                <NumberDate>{dateTime.getFullYear()}</NumberDate>
                <NumberDate>- {formatNumber(dateTime.getMonth() + 1)} -</NumberDate>
                <NumberDate>{formatNumber(dateTime.getDate())} |</NumberDate>
                <NumberDate>{formatNumber(dateTime.getHours())} :</NumberDate>
                <NumberDate>{formatNumber(dateTime.getMinutes())} :</NumberDate>
                <NumberDate>{formatNumber(dateTime.getSeconds())}</NumberDate>
            </div>
        </div>
    )
}
export default CounterLimit;