import Input from '../form/Input'
import styles from './Project.module.css'

function ProjecForm(){
    return(
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome'/>
            <div>
                <input type="number" placeholder="Insira o orcamento total"/>
            </div>
            <div>
                <select name="category_id">
                 <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value='Criar Projecto' />
            </div>
            
        </form>
    )
}

export default ProjecForm