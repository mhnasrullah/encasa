<template>
    <header class="pt-20">
        <Box>
            <div class="bg-gradient-to-br relative to-[#B2D3DA] overflow-hidden px-4 lg:px-10 rounded-lg from-[#E5EEF052] pt-10 lg:pt-28 pb-64 lg:pb-36 w-full ">
                <div class="relative z-10 md:w-2/3 lg:w-3/6">
                    <Text
                    as="header-main">The Easiest way to find a perfect place to live</Text>
                    <p class="text-sm mt-4">Find your comfort house with us. We are ready to help you find a house based on what you need.</p>
                </div>
                <img src="../../assets/images/home.png" alt="home" class="absolute max-w-fit w-[400px] lg:w-1/2 bottom-0 right-0 rounded-lg">
            </div>
            <div class="px-4 lg:px-10">
                <FormBuyRent/>
            </div>
        </Box>
    </header>
</template>

<script lang="ts" setup>
import Box from '../../components/Box.vue';
import Text from '../../components/Text.vue';
import FormBuyRent from '../../components/FormBuyRent.vue';
</script>