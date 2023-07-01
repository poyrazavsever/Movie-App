import { useState } from "react"
import Icon from "@/components/Icon"
import classNames from "classnames"

const Input = ({ id, inputType = "text", palceholder, label, setValue }) => {

    const [isVisible, setIsVisible] = useState(false)
    const [passwordType, setPasswordType] = useState("password")

    const handleClick = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible)
        if (passwordType === "password") {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    return (
        <div className="flex flex-col items-start gap-2">

            <label htmlFor={id} className="text-sm font-medium text-neutral-500">{label}</label>

            <div className="relative">

                <input type={inputType !== "password" ? inputType : passwordType} placeholder={palceholder} id={id} className='bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm px-4 py-2 rounded placeholder:text-neutral-700 placeholder:text-sm focus:outline-none w-56 sm:w-72' onChange={(e) => setValue(e.target.value)}/>

                <div className={classNames({
                    "hidden" : inputType !== "password"
                })}>
                    {isVisible ? (
                        <button onClick={handleClick}>
                            <Icon iconType="ai" iconName="AiOutlineEyeInvisible" iconColor="text-neutral-500" classname="text-lg absolute right-2 top-[9px]" />
                        </button>
                    ) : (
                        <button onClick={handleClick}>
                            <Icon iconType="ai" iconName="AiOutlineEye" iconColor="text-neutral-500" classname="text-lg absolute right-2 top-[9px]" />
                        </button>

                    )}
                </div>



            </div>

        </div>
    )
}

export default Input