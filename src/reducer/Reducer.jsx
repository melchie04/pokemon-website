import Actions from "../utils/Actions";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.LOADING:
      return { ...state, loading: true };
    case Actions.FETCHED:
      return { ...state, loading: false };
    case Actions.GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: payload,
      };
    default:
      break;
  }

  return state;
};
