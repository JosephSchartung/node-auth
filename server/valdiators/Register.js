import validator from "validator";
import isEmpty from "is-empty";

const validateRegisterInput = (data) => {
    let errs = {};
    for(let key of data.keys()) {
        data.key = !isEmpty(data.key) ? data.key : "";
        if(validator.isEmpty(data.key)) {
            errs.key(`${key} is required`);
        };
    };
    if(!validator.isLength(data.password, { min: 8 })) {
        errs.password = "Password must be at least 8 characters long.";
    }
    if(!validator.equals(data.password, data.password2)) {
        errs.password2 = "Passwords must match";
    }

    return {
        errs,
        isValid: isEmpty(errs)
    };
};

export { validateRegisterInput };