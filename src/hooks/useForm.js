import React, { useState } from 'react'
import { omit } from 'lodash'

const useForm = (callback, fields) => {

    //Form values
    const [values, setValues] = useState(fields);
    //Errors
    const [errors, setErrors] = useState({});

    const [allField, setAllField] = useState(fields);



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'firstname':
                if (value.length === 0) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        firstname: 'First name must not be empty'
                    })
                } else if (value.length <= 4) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        firstname: 'First name atleast have 5 letters'
                    })
                } else {
                    // set the error state empty or remove the error for firstname input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "firstname");
                    setErrors(newObj);

                }
                break;

            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;

            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }

    //A method to handle form inputs
    const handleInputChange = (event) => {
        //To stop default events    
        // event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]: val,
        })

        setAllField({
            ...allField,
            [name]: val,
        })

    }


    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            console.log("There is an Error!, Please fill the required field");
        }
    }


    return {
        values,
        errors,
        handleInputChange,
        handleSubmit,
        allField
    }
}

export default useForm