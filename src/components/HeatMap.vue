<template>
    <p>test</p>
      <div id="chart">
        <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import { createApp } from 'vue' //vueモジュールから、createAppという名前のエクスポートをインポートする。の意
import VueApexCharts from 'apexcharts'
import generateData from 'apexcharts'
export default {
    name: 'HeatMap',
    components: {apexchart: VueApexCharts,},
    data (){
        return{
            series: [
                    {name: 'Metric1',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric2',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric3',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric4',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric5',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric6',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric7',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric8',data: generateData(18, {min: 0,max: 90})},
                    {name: 'Metric9',data: generateData(18, {min: 0,max: 90})},
            ],
            chartOptions: {
                chart: {height: 350,type: 'heatmap',},
                dataLabels: {enabled: false},
                colors: ["#008FFB"],
                title: {text: 'HeatMap Chart (Single color)'},
            },
        }
    }
}
createApp(this).mount('#chart')    //id=appの要素に、Appを紐づける。(HACK:el:'#app'と同じ扱い?)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
