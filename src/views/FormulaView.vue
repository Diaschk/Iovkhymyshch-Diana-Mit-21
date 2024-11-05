<template>
    <div>
        <h1> Formula with the id "{{ id  }}! </h1>
        <button @click="editFormula"> Go to formula </button>
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
    computed: {
    },
    methods: {
    },
};
</script>

<style scoped>
</style>