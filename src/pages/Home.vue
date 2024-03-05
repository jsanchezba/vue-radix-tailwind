<script lang="ts" setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon'
import { cn } from '@/core/lib/utils'

import { ref } from 'vue'

const editor = ClassicEditor
const editorData = ref('<p>test<p>')
const editorConfig = {}
// import ThemeSwitcher from '@/components/ui/theme-switcher/ThemeSwitcher.vue'
// import { useI18n } from 'vue-i18n'
// import axios from 'axios'
// import { onMounted } from 'vue'

// const { t, locale } = useI18n()

// onMounted(async () => {
//     const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//     console.log(res.data)
// })
</script>

<template>
    <!-- <span>{{ t('hello') }}</span> -->
    <!-- <ThemeSwitcher /> -->
    {{ editorData }}

    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</template>

<style lang="css">
.ck.ck-editor__editable_inline {
    box-shadow: none !important;
    outline: 0 !important;
    border: 0 !important;
}
</style>
