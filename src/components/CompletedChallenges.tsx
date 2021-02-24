// Import css module
import styles from '../styles/components/CompletedChallenges.module.css';

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function CompletedChallenges() {

    // Define quais informações do contexto serão usadas nesse componente
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={ styles.completedChallengesContainer }>
            <span>Desafios completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}