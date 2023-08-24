import * as S from "./styles";

export interface Icad {
    using: string
    nome: string
    datan: string
    senha: string
}
 export const Cadastro = ({using, nome, datan, senha}: Icad ) => {
       return(
        <S.Aside>
            <form action="" method="post">
                <fieldset>
                    <legend>Cadastro</legend>
                    <label>Usuario: 
                        <input type="text"/> {using}
                        </label> 
                    <label>Nome: 
                        <input type="text"/> {nome}
                        </label> 
                    <label>Data de nscimento: 
                         <input type="text"/> {datan}
                        </label> 
                    <label>Senha: 
                        <input type="text"/> {senha}
                        </label> 
        
                </fieldset>
            </form>
        </S.Aside>
       );
 };