

export const CustomInput = ({ type, name, placeholder, label }) => {
    return (
        <div className="flex flex-col gap-2 pt-2 w-full">
            <label htmlFor="" className='text-[16px] font-normal'>{label}</label>
            <input className="outline-0 w-full rounded-lg border-[#EBEBEB] border-2 p-[10px]" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}
