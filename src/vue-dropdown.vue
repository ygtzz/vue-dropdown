<template>
    <div class="menuc">
        <div @click="fTextClick()" :style="textStyle" class="textc">
            <span class="text">{{selectedText}}</span>
            <span :class="[bShow ? 'symbol-up' : 'symbol-down']" class="symbol"></span>
        </div>
        <ul v-show="bShow" class="menus">
            <li :style="{width:menuWidth}" @click="fSelect(item)" :class="{'active': item.value == selectedValue}" v-for="(item,index) in aMenu" :key="'cmenu'+index" class="menu-item">
                {{item.text}} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'vue-dropdown',
    props:{
        value:{
            type:String,
            required:true
        },
        menus:{
            type:Array,
            required:true,
            default:[]
        },
        textWidth:{
            type:Number
        },
        type:{
            type:String,
            default:'radio'
        },
        selectedClose:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            bShow:false,
            selectedValue:this.value
        }
    },
    computed:{
        aMenu(){
            return this.menus.map(function(item){
                if(typeof item != 'object'){
                    var temp = item;
                    item = {};
                    item.value = item.text = temp;
                }
                return item;
            });
        },
        selectedText(){
            const self = this,
                  key = self.selectedValue || self.value;
            if(this.aMenu){
                const res = this.aMenu.filter(function(item){
                    return item.value == key;
                });
                if(res && res.length){
                    return res[0].text;
                }
            }
            return '';
        },
        menuWidth:function(){
            return this.textWidth ? this.textWidth + 'px' : 'auto';
        },
        textStyle(){
            const style = {};
            if(this.textWidth){
                style.width = this.textWidth + 'px';
            }
            return style;
        }
    },
    watch:{
        bShow(val){
            if(!val){
                document.removeEventListener('click',this.fHandleMenu,false);
            }
        }
    },
    methods:{
        fSelect(item){
            this.selectedValue = item.value;
            if(this.selectedClose){
                this.bShow = false;
            }
            this.$emit('input',item.value);
        },
        fHandleMenu(e){
            if(!this.$el.contains(e.target)){
                this.bShow = false;
            }
        },
        fTextClick(){
            document.addEventListener('click',this.fHandleMenu,false);
            this.bShow = !this.bShow;
        }
    },
    destroyed(){
        document.removeEventListener('click',this.fHandleMenu,false);
    }
}
</script>

<style lang="scss" scoped>
  .menuc{
    position: relative;
    color: #828d98;
    text-align: left;
    font-size: 12px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  .menus{
    top: 18px;
    left: 2px;
    position: absolute;
    padding: 5px 0;
    background-color:#fff;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 3px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;
    list-style: none;
  }
  .textc{
    padding:5px 10px;
    padding-right: 20px;
    background-color:#fff;
    border:1px solid #ddd;
    position: relative;
  }
  .symbol{
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 0;
    height: 0;
  }
  .symbol-down{
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #828D98;
  }
  .symbol-up{
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #828D98;
  }
  .menu-item{
    float: none;
    color: #828d98;
    text-align: left;
    font-size: 12px;
    padding:5px 15px 5px 10px;
  }
  .menu-item:hover,.menu-item.active{
    background-color:#08A1EF;
    color:#fff;
  }
</style>
