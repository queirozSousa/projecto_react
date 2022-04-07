import styles from './Home.module.css';

import Savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton';

function Home(){
    return (
        <section className={styles.project_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <img src={Savings} alt="Costs" />
        </section>
    )
}

export default Home