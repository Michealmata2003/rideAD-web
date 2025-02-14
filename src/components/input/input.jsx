

export const CustomInput = ({ type, name, placeholder, label }) => {
    return (
        <div className="flex flex-col gap-2 pt-2">
            <label htmlFor="" className='text-[16px] font-semibold'>{label}</label>
            <input className="outline-0 w-full rounded border-[#EBEBEB] border-2 p-[5px]" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}
