import React from 'react'
import { useState } from 'react'

function CriarFormulario(){
    function Criar(e){
        e.preventDefault()
        console.log(`Usuário de nome ${nome} e senha ${senha} cadastrado`)
    }

    const [nome, setName] = useState()
    const [senha, setSenha] = useState()

    return(
        <>
            <form onSubmit={Criar}>
                <section>
                    <label htmlFor="Nome"></label>
                    <input type="text" name="nome" id="nome" 
                    onChange={(e)=> setName(e.target.value)}
                    />
                </section>
                
                <section>
                    <label htmlFor="Senha"></label>
                    <input type="password" name="password" id="password" 
                    onChange={(e)=> setSenha(e.target.value)}
                    />
                </section>
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}
export default CriarFormulario;