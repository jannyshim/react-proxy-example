import React from 'react';


const CreateTodo = ({ onChangeForm2, handleSubmit2 }) => {


    return (
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>ToDo</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm2(e)}
                            name="todo"
                            placeholder="todo"
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm2(e)}
                            name="category"
                            placeholder="category"
                        />
                    </div>
                    <button
                        className="submit-button"
                        onClick={() => handleSubmit2()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;