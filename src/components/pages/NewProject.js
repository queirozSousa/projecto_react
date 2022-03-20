import styles from './NewProject.module.css'
import ProjecForm from '../project/ProjectForm'


function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projecto</h1>
            <p>Crie o seu Projecto para depois adicionar os servicos</p>
            <ProjecForm />
        </div>
    )
}

export default NewProject