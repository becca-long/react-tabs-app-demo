import React from 'react'

const FunPeopleForm = ({nameVal, handleNameChange, reasonVal, handleReasonChange, disabledVal, handleSubmit}) => {
  return (
    <form>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input type="text" 
                    id="nameInput" 
                    className="input is-medium" 
                    value={nameVal}
                    onChange={(event) => handleNameChange(event)}/>
            </div>
        </div>
        <div className="field">
            <label className="label">Reason they are fun</label>
            <div className="control">
                <input type="text" 
                    className="input is-medium" 
                    value={reasonVal}
                    onChange={(event) => handleReasonChange(event)}/>
            </div>
        </div>
        <div className="field">
            <input type="submit" 
                className="button is-link is-medium is-disabled" 
                disabled={disabledVal} 
                value="Add Fun Person"
                onClick={(event) => handleSubmit(event)}/>
        </div>
    </form>
  )
}

export default FunPeopleForm
