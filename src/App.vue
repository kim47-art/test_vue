
<template>
<!-- *.vue ファイルは HTML のような構文を使用して Vue コンポーネントを記述するカスタムファイルフォーマットです。
各 *.vue ファイルは <template>、<script>、<style> の三つのトップレベル言語のブロックで構成されています。 -->

<!-- <template>
デフォルトの言語は html
それぞれの *.vue ファイルは最大で一つの <template> ブロックを含みます
内容は文字列に展開され、コンパイルされた Vue コンポーネントの template オプションで使用されます -->

<!-- <script>
デフォルトの言語は js（babel-loader や buble-loader が検出される場合、自動的にES2015がサポートされる）
それぞれの *.vue ファイルは最大で一つの <script> ブロックを含みます
スクリプトは CommonJS のように処理されます（ webpack 経由でバンドルされた通常の .js モジュールと同じです）。
つまり他の依存関係を require() することができます。そして ES2015 がサポートされ、import と export 構文を使用することが出来ます
スクリプトは Vue.js コンポーネントのオプションオブジェクトをエクスポートする必要があります。 
Vue.extend() によって拡張されたコンストラクタもエクスポートすることが可能ですが、プレーンなオブジェクトが好ましいです -->

<!-- <style>
デフォルトの言語は css
複数の <style> タグは単一の *.vue ファイルでサポートされます
<style> タグは scoped か module （詳しくは Scoped CSS と CSS Modules をみてください）を使用してコンポーネントにスタイルをカプセル化する事が出来ます。
異なるカプセルモードをもつ複数の <style> タグは同じコンポーネント内で混在させることが出来ます
デフォルトではコンテンツは style-loader を使用して実際の <style> タグとして抽出され、ドキュメントの <head> に動的に挿入されます。
また、すべてのコンポーネントのすべてのスタイルが単一のCSSファイルに抽出されるようにwebpackを設定することも出来ます -->

  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  <!-- HelloWorldコンポーネントのpropsで定義されているmsgに"Welcome to Your Vue.js App"を指定する -->
  <HeatMap/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeatMap from './components/HeatMap.vue'
// export default でメンバーを囲むことで、外部からも参照できるようにします。
// 単一ファイルコンポーネントでは外部から参照されることが前提の仕組みになるので、基本的にscriptの部分は export default で囲むことが前提となります。
export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeatMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
