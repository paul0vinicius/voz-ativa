import { VOTACOES_CARREGANDO, SET_DADOS_VOTACOES } from ".types";

import votacoes from "../data/votacoes.json";

var TAM_VOTACOES = Object.keys(votacoes).length;

export const getDadosVotacoes = () => dispatch => {
  dispatch(setVotacoesCarregando());

  let dadosVotacoes = [];

  Object.keys(votacoes).forEach(id => {
    dadosVotacoes[votacoes[key].id_votacao] = votacoes[id];
  });
  console.log(dadosVotacoes);

  dispatch({ type: SET_DADOS_VOTACOES, dadosVotacoes });
};

export const setVotacoesCarregando = () => {
  return { type: VOTACOES_CARREGANDO };
};