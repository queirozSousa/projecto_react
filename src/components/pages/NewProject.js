import styles from './NewProject.module.css'
import ProjecForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'


function NewProject(){

    const navigate = useNavigate();

    function cretePost(project){
        //initialize cost and services

        project.cost = 0

        project.services =[]

        //Conection to the API
        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            //console.log(data)
            //redirect and flash message
            navigate('/projects', {message: 'Project criado com Sucesso!'})
        })
        .catch(err  =>console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projecto</h1>
            <p>Crie o seu Projecto para depois adicionar os servicos</p>
            <ProjecForm handleSubmit={cretePost} btnText = 'Criar Projecto'/>
        </div>
    )
}

export default NewProject