import { SET_SCORE_CANDIDATO } from "./types";

// Recebe um dicionário das respostas dos candidatos no formato {id_cand: [array_resp]} e retorna um dicionário no formato {id_cand: score}
export const calculaScore = respostasCandidatos => (dispatch, getState) => {
  const { arrayRespostasUsuario } = getState().usuarioReducer;

  const numRespostasUsuario = arrayRespostasUsuario.filter(value => value !== 0)
    .length;

  function comparaRespostas(arrayRespostasCandidato) {
    let respostasIguais = 0;
    for (let i = 0; i < arrayRespostasCandidato.length; i++) {
      respostasIguais +=
        arrayRespostasCandidato[i] === arrayRespostasUsuario[i] &&
        arrayRespostasUsuario[i] !== 0
          ? 1
          : 0;
    }
    return respostasIguais / numRespostasUsuario;
  }

  let scoreCandidatos = {};
  Object.keys(respostasCandidatos).map(elem => {
    let score = comparaRespostas(respostasCandidatos[elem]);
    scoreCandidatos[elem] = score;
  });

  dispatch({
    type: SET_SCORE_CANDIDATO,
    scoreCandidatos
  });
};

// Pega o top n candidatos baseado na compatibilidade entre as respostas ordenado pelo score. Recebe um dicionário das respostas dos candidatos e retorna um array com os ids dos candidatos.
export const getTopNCandidatos = (respostasCandidatos, n) => (
  dispatch,
  getState
) => {
  const { scoreCandidatos } = getState().candidatosReducer;
  let candidatos = Object.keys(scoreCandidatos).map(key => [
    key,
    scoreCandidatos[key]
  ]);

  candidatos.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) return 0;
    else return 1;
  });

  return candidatos.slice(0, n);
};
