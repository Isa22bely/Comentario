import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentarios() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          escritor={item.escritor}
          comentario={item.comentario}
        />
      ))}
    </S.Section>
  )
}
