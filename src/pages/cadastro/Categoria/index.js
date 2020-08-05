import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initials = {
    categoria: '',
    descricao: '',
    cor: '#ffff00'
  }
  const [categorias, setCategorias] = useState([  ])
  const [values, setValues] = useState(initials)

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(eventInfo) {
    const { getAttribute, value } = eventInfo.target
    setValue(
      getAttribute('name'),
      value
    )
  }

  function handleSubmit(eventInfo){
    eventInfo.preventDefault();
    setCategorias([...categorias, values ])
    setValues(initials)
  }

  return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={handleSubmit}>

          <div>

            <FormField
              label="Nome da Categoria"
              type="text"
              name="nome" 
              value={values.nome}
              onChange={handleChange}
            />

            <div>
              <label>
              Descrição:
              <input
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
              </label>
            </div>

            <FormField
              label="Cor"
              type="color"
              name="cor" 
              value={values.cor}
              onChange={handleChange}
            />

          </div>


    
          <button>
            Cadastrar
          </button>
        </form>


        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={categoria}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
    
        <Link to="/">
          HOME 
        </Link>
      </PageDefault>
  )
}

export default CadastroCategoria;