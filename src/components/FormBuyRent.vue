<template>
    <div class="relative -mt-36 md:-mt-56 lg:-mt-20 md:w-1/2 lg:w-full shadow-lg rounded-b-lg">
        <div class="flex">
            <button 
            @click="switchToBuy"
            :class="style.buy">Buy</button>
            <button 
            @click="switchToRent"
            :class="style.rent">Rent</button>
        </div>
        <div class="bg-pure-white p-4 rounded-b-lg rounded-tr-lg">
            <form @submit.prevent="" class="space-y-2 lg:space-y-0 lg:flex lg:space-x-4 lg:items-end">
                <div class="lg:grid lg:grid-cols-3 lg:gap-4 space-y-2 lg:space-y-0 lg:w-full">
                    <Input
                    placeholder="Where do you want to live?"
                    label="Location"/>
                    <Input
                    placeholder="Choose your property type"
                    label="Property Type"/>
                    <Input
                    placeholder="Choose price range"
                    label="Pricing"/>
                </div>
                <Button
                class="w-full lg:w-fit mt-2"
                as="button"
                type="submit"
                background="bg-second-blue"
                text="text-blue"
                >Search</Button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { computed, reactive } from 'vue';
import Input from './Input.vue';
import Button from './Button.vue';
// STATE
    
    const state = reactive({
        isBuySection : true
    })
    
// END STATE

// CONST
    
    const buttonStyle = 'py-2 px-4 rounded-t-lg text-sm'
    
// END CONST

// COMPUTED
    
    const style = computed(()=>state.isBuySection ? {
        rent : `${buttonStyle} bg-[#bac8c9] text-white`,
        buy : `${buttonStyle} bg-pure-white text-black`
    } : {
        rent : `${buttonStyle} bg-pure-white text-black`,
        buy : `${buttonStyle} bg-[#bac8c9] text-white`
    })
    
// END COMPUTED

// METHOD
    
    const switchToRent = () => state.isBuySection = false
    const switchToBuy = () => state.isBuySection = true
    
// END METHOD
</script>