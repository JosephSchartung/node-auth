import type { NextPage } from "next";

type FormSubmitButtonProps = {
    text: string
}

const FormSubmitButton: NextPage<FormSubmitButtonProps> = ({ text }) => {
    return(
        <div>
            <button 
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
                { text }
            </button>
        </div>
    )
}

export default FormSubmitButton;