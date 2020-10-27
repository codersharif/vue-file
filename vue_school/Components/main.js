// Global vs Local Components.html

let PlanComponent={
    template:`#plan-template-2`,
    props:{
      name:{
        type:String,
        required:true
      },
      selectedPlan:{
        type:String
      }
    },
    computed:{
      isSelected(){
        return this.name === this.selectedPlan
      }
    },
    methods:{
      select(){
        this.$emit('select-emit',this.name)
      }
    }
}

let planPickerComponent={
    template:`#plan-template-packer-2`,
    components:{
      plan2:PlanComponent
    },
    data(){
      return{
        plans:['The single','The Curious','The Addict'],
        selectedPlan: null
      }
    },
    methods:{
      selectPlan(plan){
       this.selectedPlan=plan
      }
    }
}

//props.html
Vue.component('plan-picker',{
    template:`#plan-template-packer`,
    data(){
      return{
        plans:['The single','The Curious','The Addict']
      }
    }
});

Vue.component('plan',{
    template:`#plan-template`,
    props:{
      name:{
        type:String,
        required:true
      }
    }
});


// index.html
Vue.component('counter',{
   template:`#click-counter`,
   data(){
    return{
      count:0
    }
   }
});


var app=new Vue({
   el:'#app',
   components:{
    'plan-picker2':planPickerComponent
   }
});