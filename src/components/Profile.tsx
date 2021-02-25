import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5AHeDK53RIw/profile-displayphoto-shrink_100_100/0/1567017195629?e=1619654400&v=beta&t=CyJ89sI1eVcRsGN-VvJYz8n9rVvu0C7DAAkGAVazaps" alt="Alisson de Andrade Araújo"/>
      <div>
        <strong>Alisson Andrade</strong>
        <p><a href="https://github.com/alissonandrade2020"><b>Acesse o Github</b></a></p>
               <p><a href="https://app.rocketseat.com.br/me/alissondeandradearaujo"><b>Acesse o Perfil - Rocketseat</b></a></p>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}