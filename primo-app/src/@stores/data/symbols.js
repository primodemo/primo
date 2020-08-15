import { writable, readable, derived, get } from 'svelte/store';
import _ from 'lodash'
import domainInfo from './domainInfo'
import {site} from '../@stores/data'

const store = writable([])

let symbols
store.subscribe(s => {
  symbols = s
  site.update(s => {
    return {
      ...s, 
      symbols
    }
  })
})

const actions = {
  reload: async () => {
    // const symbols = await getAllSymbols(get(domainInfo).domainName) // TODO
    // store.set(symbols)
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
  },
  modify: (symbol) => {
    const newLibrary = symbols.map(s => s.id === symbol.id ? symbol : s)
    console.log(_.cloneDeep(newLibrary))
    store.set(newLibrary)
  },
  remove: (symbolID) => {
    const newLibrary = symbols.filter(s => s.id !== symbolID)
    store.set(newLibrary)
  },
  subscribe: store.subscribe,
  set: store.set
}


export default actions