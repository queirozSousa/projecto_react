import Input from '../form/Input'
import Select from '../form/Select'
import styles from './Project.module.css'

function ProjecForm(){
    return(
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome'/>
            <Input type='number' text='Orcamento do projeto' name='budget' placeholder='Insira o nome do projeto'/>
            <Select name='category_id' text='Selecione a categoria' />
            <div>
                <input type="submit" value='Criar Projecto' />
            </div>
            
        </form>
    )
}

export default ProjecForm