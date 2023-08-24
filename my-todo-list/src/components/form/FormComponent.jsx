import React from 'react'
import ButtonComponent from '../button/ButtonComponent'

export const FormComponent = () => {
    return (
        <form className="FormTodo">
            <legend className="FormTitle">
                <div className="InputContainer">
                    <div className="InputGroup">
                        <label htmlFor="title">Título</label>
                        <input type='text' id='title' />
                    </div>
                    <div className="InputGroup">
                        <label htmlFor="description">DFescrição</label>
                        <textarea id="description" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <ButtonComponent type='submit'>Salvar</ButtonComponent>
            </legend>
        </form>
    )
}
