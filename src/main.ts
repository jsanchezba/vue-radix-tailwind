import { createApp } from 'vue'
import router from '@/core/router'
import i18n from '@/core/i18n'
import CKEditor from '@ckeditor/ckeditor5-vue'

import './style.css'
import App from './App.vue'

createApp(App).use(router).use(i18n).use(CKEditor).mount('#app')
