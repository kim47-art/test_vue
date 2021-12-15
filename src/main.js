// このファイルがVueのエントリポイント

import { createApp } from 'vue' //vueモジュールから、createAppという名前のエクスポートをインポートする。の意
import App from './App.vue'     //./App.vueモジュールから、Appという名前のエクスポートをインポートする。の意

createApp(App).mount('#app')    //id=appの要素に、Appを紐づける。(HACK:el:'#app'と同じ扱い?)
