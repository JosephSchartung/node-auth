import validator from "validator";
import isEmpty from "is-empty";
const validateLoginInput = (data) => {
    let errs = {};
    for (const key in data) {
        data[key] = !isEmpty(data[key]) ? data[key] : "";
        if (validator.isEmpty(data[key])) {
            errs[key] = `${key} is required`;
        }
        ;
    }
    ;
    return {
        errs,
        isValid: isEmpty(errs)
    };
};
export default validateLoginInput;
