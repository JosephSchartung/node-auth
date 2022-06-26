import type { NextPage } from "next";

type TextInputProps = {
    inputType: string,
    id?: string,
    name: string,
    placeHolder?: string,

}

const TextInput: NextPage<TextInputProps> = ({ inputType, name, id, placeHolder }) => {
    return(
        <div className="mb-6">
        <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none'
            type={ inputType }
            name={ name } 
            id={ id || name } 
            placeholder={ placeHolder || '' }
        />
    </div>
    )
}
export default TextInput;