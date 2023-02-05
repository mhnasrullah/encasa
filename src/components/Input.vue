<template>
    <div>
        <label 
        v-if="label" 
        :for="label"
        class="text-xs ml-2 font-medium">{{ label }}</label>
        <div 
        :class="[rounded]"
        :id="label"
        class="bg-pure-white border-[1.5px] p-1 border-second-blue">
            <input 
            :placeholder="placeholder"
            class="outline-none bg-trans text-xs w-full" type="text">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps,withDefaults } from 'vue'

// PROPS
    
    interface Props{
        rounded? : 'rounded-lg' | 'rounded-full',
        label? : string,
        placeholder? :string
    }

    const {rounded,label,placeholder} = withDefaults(defineProps<Props>(),{
        rounded : 'rounded-lg'
    })
    
    
// END PROPS

</script>