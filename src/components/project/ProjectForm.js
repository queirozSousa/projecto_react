import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Project.module.css'

function ProjecForm({handleSubmit, btnText, projectData}){
    const[categories, setCategories] = useState([])
    const[project, setProject] =useState(projectData || {})

    useEffect(() => {
        fetch(' http://localhost:5000/categories',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data)=>{
        setCategories(data)
    })
    .catch(err =>console.log(err))
    }, [])

    //Para chamar o handleSubmit do elemento Pai
    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
       // console.log(project)
    }
    //Para mudar a propriedade de texto
    function handlechange(e){
        setProject({...project, [e.target.name]: e.target.value})
        

    }

    //Para o Select
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
        })
        

    }
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome' handleOnchange={handlechange} value={project.name ? project.name: ''}/>
            <Input type='number' text='Orcamento do projeto' name='budget' placeholder='Insira o nome do projeto' handleOnchange={handlechange} value={project.budget ? project.budget : ''}/>
            <Select name='category_id' text='Selecione a categoria' options={categories} handleOnchange={handleCategory} value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default ProjecForm