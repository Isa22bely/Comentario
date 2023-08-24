import * as S from "./styles";
export interface ICard {
  escritor: string
  comentario: string
}
export const Card = ({ escritor, comentario }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Criador: </strong> {escritor}
      </h3>
      <p>Comentario: {comentario}</p>
    </S.Aside>
  );
};
