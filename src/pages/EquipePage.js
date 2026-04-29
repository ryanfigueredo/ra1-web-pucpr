import Equipe from "../components/Equipe";

export default function EquipePage() {
  return (
    <div>
      <h1>Nossa Equipe</h1>

      <Equipe
        nome="Douglas Henrique do Prado"
        cargo="Desenvolvedor Back-end"
        idade={23}
        linkedin="prado-douglas"
        github="DougBlud"
      />
      <Equipe
        nome="Pedro Henrique Hara Bialy"
        cargo="Desenvolvedor Front-end"
        idade={20}
        linkedin="pedro-henrique-hara-bialy-27aba2313"
        github="PedroHenriqueHaraBialy"
      />
      <Equipe
        nome="Ryan D'Oliveira Lopes Figueredo"
        cargo="Desenvolvedor Full Stack"
        idade={23}
        linkedin="ryanfig/"
        github="ryanfigueredo"
      />
      <Equipe
        nome="Yasmim Egidio de Oliveira"
        cargo="Designer e Front-end"
        idade={18}
        linkedin="yasmim-egidio-12ba32347"
        github="alberta419"
      />
    </div>
  );
}