<template>
    <div>
        <h1>Formula with the id "{{ id }}"!</h1>
        
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    mounted() {
        console.log("ID received in FormulaView:", this.id);
    },
};
</script>

<style scoped>
</style>
