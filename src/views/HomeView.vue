<!-- HomeView.vue -->
<template>
    <div>
        <h1>Home page!</h1>
        <button @click="editSetting">Go to setting</button>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
        editSetting() {
            const timestamp = new Date().getTime();
            const settingId = `setting-${timestamp}`;
            this.$router.push({ name: 'Setting', params: { id: settingId } });
        },
    },
};
</script>

<style scoped>
</style>
