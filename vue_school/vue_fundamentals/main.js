var app= new Vue({
    el:"#app",
	data:{
		header:"Shopping List App",
		// header:null,
		state:'default',
		newItem:'',
		newItem2:'',
		test:'',
		items:[
             // '10 perty hats',
             // '10 board games',
             // '20 cups'
		],
		items2:[
             {
             	label:'10 perty hats',
             	purchased:false,
             	highPriority:false,
             },
             {
             	label:'2 board games',
             	purchased:true,
             	highPriority:false,
             },
             {
             	label:'20 cups',
             	purchased:false,
             	highPriority:true,
             }
           
		]
		
	},
	computed:{
       charCout(){
       	 return this.newItem2.length;
       },
       reversedItem(){
        return this.items2.slice(0).reverse();

       }
	},
	methods:{
		saveItem:function(){
			this.items.push(this.newItem);
			this.newItem='';
		},
		saveItem2:function(){
          this.items2.push({
          	label:this.newItem2,
          	purchased:false
          });

          this.newItem2='';
		},
		changeState:function(newState){
           this.state=newState;

           this.newItem='';
		},
		togglePurchased:function(item2){
			// this.test=!item2.purchased;
			item2.purchased =!item2.purchased;

		}
	}
});
