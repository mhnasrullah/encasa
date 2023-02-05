<template>

    <button 
    :class="style"
    v-if="as==='button'">
        <slot/>
    </button>

    <RouterLink
    :class="style"
    v-else-if="as==='link' && to"
    :to="to">
        <slot/>
    </RouterLink>

</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

// CONST

    const baseStyle = 'px-6 py-2 text-center rounded-lg text-sm hover:opacity-80 transition-all h-fit';

// END CONST

// PROPS

    interface Props{
        as : 'button' | 'link'
        background : 'bg-second-blue'
        text : 'text-black' | 'text-blue'
        to? : string
    }

    const {as,background,text,to} = defineProps<Props>()

// END PROPS

// COMPUTED

    const style = computed(()=>{
        return `${background} ${text} ${baseStyle}`
    })

// END COMPUTED

</script>