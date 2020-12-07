<h1>3.1. Documentação Arquitetural com ISO 42010</h1>

Para prover uma documentação padronizada e que possa ser compreendida de forma unificada, ao usar a ISO 42010 precisamos estabelecer quais são os <b>concerns</b> (os critérios a serem atendidos) e os <b>stakeholders</b> (os atores envolvidos no processo). Abaixo a descrição dos <b>concerns</b> e dos <b>stakeholders</b>.

<h3>Concerns</h3>
<ol>
  <li>
    <b>Adequação funcional</b>
    <p>O sistema precisa ser baseado na web e poder ser acessado através de um navegador de internet em computadores desktop, sem necessidade de recursos especiais para deficientes visuais ou físicos.</p>
  </li>
  
  <li>
    <b>Compatibilidade</b><br/>
    <p>Por funcionar na web, o sistema já vai atender o atributo compatibilidade, por funcionar em sistemas Windows, Linux e MacOS. Não existe necessidade de adaptação para celulares e tablets.</p>
  </li>
  <li>
    <b>Usabilidade</b><br/>
    <p>O sistema precisará apresentar uma interface de fácil interpretação pelos usuários e facilitar a marcação e edição das consultas.</p>
  </li>
  <li>
    <b>Confiabilidade</b><br/>
    <p>O sistema deve ser estável e mostrar com clareza as ações gravadas e mitigar qualquer problema que possa ocorrer na sincronização entre a tela sendo utilizada pelo usuário e os dados gravados no banco, em caso de desconexão da internet.</p>
  </li>
  <li>
    <b>Segurança</b><br/>
    <p>Por tratar de dados confidenciais, como qualquer consultório médico, os dados devem ser criptografados ao serem gravados no banco e o sistema deve rodar em uma plataforma web com certificados digitais que garantam a transmissão de dados segura em todas as direções.</p>
  </li>
</ol>

<h3>Stakeholders</h3>
<ol>
  <li>
    <b>Gerente do projeto</b>
  </li>
  
  <li>
    <b>Desenvolvedores do projeto</b>
  </li>
  
  <li>
  <b>Usuários finais</b>
    <ul>
      <li>
        Psicólogos(as)
      </li>
      <li>
        Secretários(as)
      </li>
      <li>
        Pacientes
      </li>
    </ul>
  </li>
