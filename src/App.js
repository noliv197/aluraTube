import './App.css';
import config from "./config.json"
import Cabecalho from './componentes/cabecalho';
import SecaoVideos from './componentes/secaoVideos';
import { CSSReset } from './CSSReset';

function App() {
  const nomesPlaylists = Object.keys(config.playlists)
  return (
    <> 
      <CSSReset/>
      <Cabecalho
        imagem='./imagens/Banner.png'
        nome= {config.nome}
        cargo= {config.cargo}
        github= {config.github}
      />

      {nomesPlaylists.map(playlist=>
        <SecaoVideos
          key={playlist}
          nome={playlist}
          video={config.playlists[playlist]}
        />
        
        )}

    </>
  );
}

export default App;
