<template>
    <nav class="py-4">
        <Box class="md:flex md:justify-between">
            <div class="w-full md:w-fit flex justify-between relative z-10">
                <Logo/>
                <button
                class="md:hidden"
                @click="toogleShow">
                    <img src="../assets/icons/hamburger.svg" class="w-3 fill-blue" alt="hamburger">
                </button>
            </div>
            <div 
            :class="state.isShow ? '-right-full' : 'right-0'"
            class="fixed md:static md:flex-row flex transition-all md:space-x-6 flex-col w-full md:w-fit px-4 md:px-0 h-screen md:h-fit pt-16 md:pt-0 space-y-2 md:space-y-0 md:items-center bg-pure-white top-0">
                <RouterLink 
                v-for="({name,path},i) in data" 
                :class="pathActive === path && 'font-medium'"
                class="text-sm text-center w-full md:w-fit text-black"
                :to="path"
                :key="i">{{ name }}</RouterLink>
                <Button 
                text="text-black"
                background="bg-second-blue"
                to="/"
                as="link">
                Sign In
                </Button>
            </div>
        </Box>
    </nav>
</template>

<script lang="ts" setup>
import Box from '../components/Box.vue';
import Logo from '../components/Logo.vue';
import Button from '../components/Button.vue';
import data from '../data/navbar.json';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const {path : pathActive} = useRoute();

// STATE
    
    const state = reactive({
        isShow : false
    })
    
// END STATE

// METHODS
    
    const toogleShow = () => state.isShow = !state.isShow;
    
// END METHODS

</script>