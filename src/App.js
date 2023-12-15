import React, { useEffect, useState } from 'react';
import './App.css';
import dog from './dog.png'

function App() {
  const [estado, setEstado] = useState(-1);

  useEffect(() => {
    const naoButton = document.getElementById('botãonão');
    const simButton = document.getElementById('botãosim');


    const moverBotao = () => {
      const novoX = Math.random() * window.innerWidth;
      const novoY = Math.random() * window.innerHeight;

      naoButton.style.left = novoX + 'px';
      naoButton.style.top = novoY + 'px';
    };

    const entrar = () => {
      setEstado(prevEstado => prevEstado + 1);
    };

    naoButton.addEventListener('mouseenter', entrar);

    simButton.addEventListener('click', () => {
      document.getElementById('respostasim').innerHTML = 'Eu te amo meu amor!!';
      simButton.style.transform = 'translate(0px)';
      naoButton.style.transform = 'translate(0px, 0px)';

      setTimeout(() => {
        document.getElementById('respostasim').innerHTML = '';
      }, 3000);

      moverBotao();
    });

    return () => {
      naoButton.removeEventListener('mouseenter', entrar);
      simButton.removeEventListener('click', () => {
        document.getElementById('respostasim').innerHTML = 'Eu te amo meu amor!!';
        simButton.style.transform = 'translate(0px)';
        naoButton.style.transform = 'translate(0px, 0px)';

        setTimeout(() => {
          document.getElementById('respostasim').innerHTML = '';
        }, 3000);

        moverBotao();
      });
    };
  }, []);

  useEffect(() => {
    const naoButton = document.getElementById('botãonão');

    if (estado === 0) {
      naoButton.style.transform = 'translate(130px, -150px)';
    } else if (estado === 1) {
      naoButton.style.transform = 'translate(130px, 150px)';
    } else if (estado === 2) {
      naoButton.style.transform = 'translate(-325px, 150px)';
    } else if (estado === 3) {
      naoButton.style.transform = 'translate(-325px, -150px)';
    } else if (estado === 4) {
      naoButton.style.transform = 'translate(135px, 150px)';
    } else if (estado === 5) {
      naoButton.style.transform = 'translate(135px, -150px)';
    } else if (estado === 6) {
      naoButton.style.transform = 'translate(-325px, 150px)';
    } else if (estado === 7) {
      naoButton.style.transform = 'translate(-325px, -150px)';
      setEstado(-1);
    }
  }, [estado]);

  return (
    <div className="App">
      <h1>Quer namorar comigo?</h1>
      <button className="botão" id="botãosim">Sim</button>
      <button className="botão" id="botãonão">Não</button>
      <footer id="respostasim"></footer>
    </div>
  );
}

export default App;
