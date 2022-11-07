import { storeNames } from '../util/constants.mjs'

export function createAccountStore ({ createAppState }) {
  createAppState(storeNames.ACCOUNT, {
    initialState: {
      account: null,
      user: null
    },
    setAccount (account) {
      this.setState(() => ({ account }))
    },
    setUser (user) {
      this.setState(() => ({ user }))
    }
  })
}
