export default {
    appendFone: (state, { species, fone }) => {
        state[species].push(fone)
    }
}