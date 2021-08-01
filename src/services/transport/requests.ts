import axios, { AxiosError } from 'axios'
import { notify } from '../notify/notify'

const BASE_API_URL = 'https://pokeapi.co/api/v2/'

type PokemonJsonError = {message: string};

export const get = async <T>(url: string, params: Record<string, unknown>, onError?: (error: PokemonJsonError) => void) => {
  try {
    return (await axios.get<T>(`${BASE_API_URL}${url}`, { params })).data
  } catch (e) {
    const jsonError = (e as AxiosError).toJSON() as PokemonJsonError
    if (!onError) {
      notify.error('Error', jsonError.message)
    } else {
      onError(jsonError)
    }
    console.log(e)
  }
}
