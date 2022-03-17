import styles from './Home.module.css';

import Savings from '../../img/savings.svg'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href="/">Criar Projecto</a>
            <img src={Savings} alt="Costs" />
        </section>
    )
}

export default Home