import styles from './NewProject.module.css'
import ProjecForm from '../project/ProjectForm'
import {useHistory} from 'react-router-dom'


function NewProject(){

    const history = useHistory

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
            console.log(data)
            //redirect
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