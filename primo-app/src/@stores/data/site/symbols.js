import { writable, readable, derived, get } from 'svelte/store';
import _ from 'lodash'
import {site} from '../@stores/data'

const store = writable([])

let symbols
store.subscribe(s => {
  symbols = s
})

const actions = {
  reload: async () => {
    return symbols
  },
  add: (symbol) => {
    store.set([ symbol, ...symbols ])
  },
  place: (symbol) => {
    // store.set([ symbol, ...symbols ])
    const exists = _.some(symbols, ['id',symbol.id])
    if (exists) {
      actions.modify(symbol)
    } else {
      actions.add(symbol)
    }
    site.save({ symbols })
  },
  modify: (symbol) => {
    const newLibrary = symbols.map(s => s.id === symbol.id ? symbol : s)
    store.set(newLibrary)
  },
  remove: (symbolID) => {
    const newLibrary = symbols.filter(s => s.id !== symbolID)
    store.set(newLibrary)
  },
  get: (symbolID) => _.find(symbols, ['id', symbolID]),
  subscribe: store.subscribe,
  set: store.set
}


export default actions