import React, { useState, Fragment } from 'react';


const Survey = (props) => {
    const [surveyType, setSurveyType] = useState('defaultValue');
    const [options, setoptions] = useState([{value:'',id:Date.now()}]);
    const add=()=>
    {
        setoptions([...options,{value:'',id:Date.now()}])
        
    }
    return (
        <Fragment>

            <div className="question-type-container">
                <select
                    name="survey"
                    value={surveyType}
                    onChange={(evt) => {
                        setSurveyType(evt.target.value);
                    }}
                >
                    <option value="defaultValue">Select question type</option>
                    <option value="multi">Multi-select</option>
                    <option value="single">Single select</option>
                </select>
            </div>
            {surveyType != "defaultValue" ? (
                <div className="survey-container">
                    <input type="text" placeholder="Enter your question here" className="question-container" />
                    <p>Options</p>
                    {
                        options.map((option)=>(
                            <div className="answer-container">
                            <input type="text" placeholder="Type answer here" value={option.value} />
                        <p onClick={add}>➕</p>
                            <p>➖</p>
                        </div>

                        ))
                    }

                   


                </div>) : null
            }

        </Fragment>
    );
};

export default Survey;
