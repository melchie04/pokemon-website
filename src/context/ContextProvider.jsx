import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "../reducer/Reducer";
import Actions from "../utils/Actions";

const PokemonContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchList, setSeachList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [pokemon, setPokemon] = useState({});
  const initialState = {
    loading: false,
    pokemonList: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const initializeSearchList = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    setSeachList(res.data.results);
  };

  const initializePokemonList = () => {
    getPokemonList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  };

  const getPokemonList = async (url) => {
    dispatch({ type: Actions.LOADING });
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonData(res.data.results)
      .then((results) => {
        dispatch({ type: Actions.GET_POKEMON_LIST, payload: results });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch({ type: Actions.FETCHED });
      });
  };

  const getPokemonData = async (res) => {
    const state = [];
    const promises = [];
    for (let i = 0; i < res.length; i++) {
      promises.push(axios.get(res[i].url));
    }
    const results = await Promise.all(promises);
    for (let i = 0; i < results.length; i++) {
      state.push(results[i].data);
    }
    return state;
  };

  const nextPokemonList = () => {
    getPokemonList(nextUrl);
  };

  const prevPokemonList = () => {
    getPokemonList(prevUrl);
  };

  const searchPokemon = (searchQuery) => {
    dispatch({ type: Actions.LOADING });
    const filteredList = searchList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    getPokemonData(filteredList)
      .then((results) => {
        dispatch({ type: Actions.GET_POKEMON_LIST, payload: results });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch({ type: Actions.FETCHED });
      });
  };

  useEffect(() => {
    initializeSearchList();
    initializePokemonList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        initializePokemonList,
        nextUrl,
        nextPokemonList,
        prevUrl,
        prevPokemonList,
        searchPokemon,
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default ContextProvider;

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
