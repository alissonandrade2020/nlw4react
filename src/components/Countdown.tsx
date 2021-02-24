// Import css module
import styles from '../styles/components/Countdown.module.css';

// Import useState, useEffect (Hook do React) e useContext (para usar informações de outra parte da aplicação)
import { useState, useEffect, useContext } from 'react';

// Import do contexto
import { ChallengesContext } from '../contexts/ChallengesContext';

// O useEffect é usado da seguinte maneira:
// 2 argumentos
// 1) o que eu quero executar?
// 2) quando eu quero executar?
//
// useEffect(() => {functionEx()}, [isActive])
//
// sempre que o valor de 'isActive' mudar, a função será executada

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    // Define quais informações do contexto serão usadas nesse componente
    const { startNewChallenge } = useContext(ChallengesContext);



    // Desclaração dos Estados do React (useState)
    const [time, setTime] = useState(18 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    // Manipula o 'time' para transformar em minutos e segundos
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Lógica para pegar a primeira e segunda casa dos minutos e segundos
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    // Lógica para resetar a contagem
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    // Lógica para a contagem regressiva
    // Muda o estado do isActive e ativa a primeira redução de um segundo.
    // Quando o segundo é reduzido, o useEffect é acionado de novo, modificando mais um segundo
    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();    // Função do contexto
        }
    }, [isActive, time])

    return (
        <div>
            <div className={ styles.countdownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>


            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                 <>    
                    { isActive ? (
                    <button 
                        type="button" 
                        className={ `${styles.countdownButton} ${styles.countdownButtonActive}` } 
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>

                    ) : (
                        <button 
                            type="button" 
                            className={ styles.countdownButton }
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>

                        ) }
                </>
            ) }

        </div>
        
    );
}