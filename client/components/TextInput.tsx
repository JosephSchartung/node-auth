import type { NextPage } from "next";
import React from "react";

type TextInputProps = {
    inputType: string,
    id?: string,
    name: string,
    placeHolder?: string,
    onChange: (e:any) => void;
}

class TextInput extends React.Component<TextInputProps> {
    constructor(props: TextInputProps) {
        super(props);
    }

    render() {
        return(
            <div className="mb-6">
            <input
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none'
                type={ this.props.inputType }
                name={ this.props.name } 
                id={ this.props.id || this.props.name } 
                placeholder={ this.props.placeHolder || '' }
                onChange={this.props.onChange}
            />
        </div>
        )
    }
}

export default TextInput;