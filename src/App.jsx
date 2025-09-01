import Card from "./components/Card"
import Logos from "./components/Logos"

function App() {

  return (
    <div className="w-screen h-screen flex justify-center p-6">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="public/videos/bg_video.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 w-3/4">

        <div className="absolute inset-0 bg-black opacity-75 rounded-md"></div>
        <div className="relative z-20 text-white rounded-md space-y-4 p-6">
          <h1 className="text-6xl font-bold text-center my-8">Claudio Ruan da Silva</h1>

          <div className="my-8">

            <div className="flex justify-center gap-4">

              <Logos title="Python" />
              <Logos title="React" />
              <Logos title="Php" />
              <Logos title="Mysql" width="24"/>
              <Logos title="Mongodb" width="32"/>

            </div>

          </div>

          <div>

            <div className="flex justify-center">
              <div className="w-1/2 text-center">
                Sou junior full stack com mais de 3 anos de experiência na área. Tenho familiaridade com a arquitetura MVC e utilizo tecnologias como PHP(Laravel), Javascript, HTML e CSS para desenvolver o back e frontend. Tenho um conhecimento mais avançado em RPA utilizando Python e as suas libs, por exemplo: Selenium, Seleniumbase, Requests, Beautifulsoup e recentemente criei um robô utilizando a lib Async. Para documentações de API tenho experiência com o swagger. Além disso, estou investindo no meu conhecimento de Node.js e React.js, com o objetivo de me tornar um desenvolvedor full stack mais completo.
              </div>
            </div>

            <div className="flex gap-6">

              <Card 
                title="SCI Sistemas contábeis"
                time="3y - Atual"
                description="Responsável por inovações e manutenções de três módulos chaves no SCI-WEB: CND, Alvará e SBS. Estes modulos possuem foco em automação, obtendo arquivos importantes para o contador.
                Outro módulo que sou um dos responsáveis seria o SCIWEB, que é um site centralizado para gerenciar outros módulos que dão assistência ao contador. Este projeto utiliza Laravel para o backend, HTML e Javascript para o frontend, já para os bancos MySQL e em alguns casos o DynamoDB. Todos os módulos que precisam armazenar algum tipo de arquivo utilizam do S3 da Amazon. Para comunicação entre os principais serviços da empresas foram desenvolvidos vários micro-serviços."
              />
              <Card title="texto"/>
              <Card title="texto"/>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
