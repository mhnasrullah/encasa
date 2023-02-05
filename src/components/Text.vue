<template>
    <h1
    :class="style"><slot/></h1>
</template>

<script lang="ts" setup>

import { computed, defineProps } from 'vue';

// PROPS
    
    interface Props {
        as : 'header-main' | 'header-section'
    }
    const {as} = defineProps<Props>()

// END PROPS

// COMPUTED
    
    const baseStyle = 'text-2xl lg:text-4xl lg:leading-snug'
    const style = computed(()=>{
        switch (as) {
            case 'header-main' : return `${baseStyle} text-black font-semibold`
        }
    })
    
// END COMPUTED

</script>