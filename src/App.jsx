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

          <div className="flex justify-center">

            <div className="w-1/2">
              Sou junior full stack com mais de 3 anos de experiência na área. Tenho familiaridade com a arquitetura MVC e utilizo tecnologias como PHP(Laravel), Javascript, HTML e CSS para desenvolver o back e frontend. Tenho um conhecimento mais avançado em RPA utilizando Python e as suas libs, por exemplo: Selenium, Seleniumbase, Requests, Beautifulsoup e recentemente criei um robô utilizando a lib Async. Para documentações de API tenho experiência com o swagger. Além disso, estou investindo no meu conhecimento de Node.js e React.js, com o objetivo de me tornar um desenvolvedor full stack mais completo.
            </div>

            <div>

            

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
