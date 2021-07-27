const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        // ID not used, see solution for answer.
        updateRemoval(id) {
            this.cart.pop(id)
        }
    }
})
