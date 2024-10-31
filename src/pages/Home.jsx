export default function Home() {
  return (
    <article className="d-flex flex-column justify-content-center mt-2 px-4 py-5">
      <section className="card px-3 py-4 rounded-4 border-0 shadow-sm mb-4">

        <div id="about" className="mb-2">
          <h2>Sobre</h2>
          <p>
            Bem-vindos ao My-cars! Um sistema de gestão sobre uma API, na qual o objetivo deste sistema é, demonstrar 80% das funcionalidades do projeto <a href="https://github.com/GustavoSachetto/Api-carros" target="_blank">Api-carros</a>.
          </p>
        </div>

        <div id="functionalities" className="mb-3">
          <h3 className="fw-normal fs-4">Princípais funcionalidades</h3>
          <p>Através desse sistema você pode:</p>
          <ul className="list-group list-group-horizontal mb-2">
            <li className="list-group-item">Cadastrar veículo</li>
            <li className="list-group-item">Buscar veículo</li>
            <li className="list-group-item">Cadastrar marca</li>
            <li className="list-group-item">Cadastrar modelo</li>
            <li className="list-group-item">Cadastrar combustível</li>
            <li className="list-group-item">Cadastrar transmissão</li>
            <li className="list-group-item">Criar conta</li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">Logar na conta</li>
            <li className="list-group-item">Acessar usuários</li>
            <li className="list-group-item">Etc...</li>
          </ul>
        </div>

        <div id="technical">
          <h3 className="fw-normal fs-4">Análise técnica</h3>
          <div className="d-flex">
            <div className="me-5">
              <p>Tópicos interessantes abordados no projeto:</p>
              <ul>
                <li>Programação Orientada a Objeto</li>
                <li>Arquitetura MVC.</li>
                <li>Configuração de rotas.</li>
                <li>Requisição do cliente.</li>
                <li>Resposta do servidor.</li>
                <li>Codigo status HTTP.</li>
                <li>Basic Authentication.</li>
                <li>Token Authentication.</li>
                <li>Implementação de cache.</li>
                <li>Banco de dados.</li>
                <li>Postman (Ferramenta de teste).</li>
                <li>Formatação de arquivos JSON.</li>
              </ul>
            </div>
            <div>
              <p>Princípais técnologias utilizadas:</p>
              <ul>
                <li>REACT</li>
                <li>JAVASCRIPT</li>
                <li>PHP</li>
                <li>MYSQL</li>
                <li>AXIOS</li>
                <li>BOOTSTRAP</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JSON</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section className="card px-3 py-4 rounded-4 border-0 shadow-sm mb-4">
        <h2>Documentação</h2>
        <p>
          <span>Toda a documentação da API está disponível em: </span> 
          <a href="https://www.postman.com/api-carros-gs/workspace/api-carros-developer-workspace">www.postman.com/api-carros-gs/api-carros-developer-workspace</a>
        </p>
      </section>

      <section className="card px-3 py-4 rounded-4 border-0 shadow-sm mb-4">
        <h2>Repositório</h2>
        <span>
          <span>Conferir API: </span>
          <a href="https://github.com/GustavoSachetto/Api-carros">github.com/GustavoSachetto/Api-carros</a>
        </span>
        <span>
          <span>Visualizar Site: </span>
          <a href="https://github.com/GustavoSachetto/My-cars">github.com/GustavoSachetto/My-cars</a>
        </span>

      </section>

      <section className="card px-3 py-4 rounded-4 border-0 shadow-sm mb-4">
        <h2>Criador</h2>
        <span>Criado por: <strong className="fw-semibold">Gustavo Sachetto da Cruz</strong></span>
        <div id="networks">
          <a href="https://www.linkedin.com/in/gustavo-sachetto/" className="pe-2" target="_blank">Linkedin</a>
          <a href="https://github.com/GustavoSachetto/" className="pe-2" target="_blank">Github</a>
          <a href="https://gustavosachetto.github.io/Portfolio/" className="pe-2" target="_blank">Portfolio</a>
        </div>
      </section>

    </article>
  )
}