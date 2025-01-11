import React from 'react'

interface Button{
    name:string
}

const Button:React.FC<Button> = ({name}) => {
  return (
    <>
      <button className="p-3 text-white transition-all ease-in bg-[#094B72] rounded-[4px] hover:bg-[#e0f2fe] border border-[#094B72] hover:text-black my-5">
        {name}
      </button>
    </>
  );
}

export default Button
