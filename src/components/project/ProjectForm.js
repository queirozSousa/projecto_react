import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Project.module.css'

function ProjecForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome'/>
            <Input type='number' text='Orcamento do projeto' name='budget' placeholder='Insira o nome do projeto'/>
            <Select name='category_id' text='Selecione a categoria' />
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default ProjecForm