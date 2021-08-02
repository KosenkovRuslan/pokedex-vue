import { get } from './requests'
import { ListResponse, Pokemon } from './types'

export const getPokemons = async (limit = 20, offset = 0) => {
  return await get<ListResponse<Pokemon>>('pokemon', { limit, offset })
}
