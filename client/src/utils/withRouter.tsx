import { Component, ComponentClass } from "react";
import { useNavigate } from "react-router-dom";

export default (Component:ComponentClass<any,any>) => {
    const Wrapper = (props:any) => {
        const history = useNavigate();
        return (
            <Component
                history={history}
                {...props}
            />
        )
    };
    return Wrapper;
}