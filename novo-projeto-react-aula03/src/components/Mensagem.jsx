import React from 'react'

const Mensagem = ({tipo}) => {
  const tipoMensagem = () => {
    if (tipo === "sucesso") {
      return <h1>Só sucesso</h1>
    } else if (tipo === "erro") {
      return <h2>Deu erro por aí...</h2>
    } else if (tipo === "aviso") {
      return <h3>Atenção! Não deu bom.</h3>
    } else {
      return null;
    }
  }
  return (
    <div className='mensagem'>
      {tipoMensagem()}
    </div>
  )
}

export default Mensagem