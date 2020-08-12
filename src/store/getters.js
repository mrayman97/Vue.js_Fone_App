export default {
    foneCount: (state) => {
        return state.sams.length + state.apple.length
    },
    getAllSams: (state, getters) => {
        return state.fones.filter((fone) => {
            return fone.species === 'sams'
        })
    }
}