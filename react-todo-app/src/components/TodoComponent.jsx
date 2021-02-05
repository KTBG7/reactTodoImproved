import React, {useState,useEffect} from 'react'

import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { retrieveTodo } from '../api/todo/TodoDataService';
import { getLoggedInUserName } from './AuthenticationService';

function TodoComponent(props) {

    const [todo, setTodo] = useState({id: props.match.params.id, description: '', targetDate: moment(new Date()).format('YYYY-MM-DD')})

    const onSubmit = (values) =>{
        console.log(todo)
    }

    const validate = (values) =>{
        let errors = {};
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length<5){
            errors.description = 'Enter at least 5 Characters'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a Valid Date'
        }
        return errors;
    }
    useEffect(() =>{
        let username = getLoggedInUserName();
        let id = props.match.params.id;
        retrieveTodo(username, id)
        .then(response => {
            setTodo(response.data)})
      })

    return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{
                        description: todo.description,
                        targetDate: moment(todo.targetDate).format('YYYY-MM-DD')
                    }}
                    onSubmit={onSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={validate}
                    enableReinitialize={true}
                    >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" id="description" type="text" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Date</label>
                                    <Field className="form-control" type="date" id="targetDate" name="targetDate" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
           
        </div>
    )
}

export default TodoComponent
