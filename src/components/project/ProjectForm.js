import styles from './Project.module.css'

function ProjecForm(){
    return(
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Insira o nome do projecto" />
            </div>
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