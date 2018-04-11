const dropdown = VueDropdown.dropdown;

new Vue({
    name: 'c-app',
    el: '#container',
    created() {

    },
    data() {
        return {
            fontFamily:'',
            aFontFamily:[
                { value:"",text:'默认字体'},
                { value:"Arial",text:'Arial'},
                { value:"Microsoft YaHei",text:'微软雅黑'},
                { value:"SimHei",text:'黑体'},
                { value:"SimSun",text:'宋体'}
            ]
        }
    },
    methods: {
        fRun() {

        }
    },
    components: {
        'c-dropdown': dropdown
    }
});

