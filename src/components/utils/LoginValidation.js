const LoginValidation = (values) => {

        if (!values.username || !values.password) {
            return {
                valid: false,
                message: "Username and password are required."
            };
        }
    
        // All validations passed
        return {
            valid: true,
            message: "Validation successful."
        };
    
}

export default LoginValidation;
