var value='Socks';

var app=new Vue({
    el:'#app',
    data:{
    	product:value,
      brand:'Vue Mastery',
    	image:"./img/pic.jpg",
    	text:"shirt",
    	url:"shirt.html",
    	selectedVariant:0,
    	// inventory:100,
    	details:["80% cotton","20% polyester","Gender-natural"],
    	variants:[
          {
          	variantId:2234,
          	variantColor:"green",
          	variantImage:"./img/green.png",
            variantQty:10
          },
          {
          	variantId:2235,
          	variantColor:"blue",
          	variantImage:"./img/blue.jpeg",
            variantQty:0
          }
    	],
    	cart:0,
    },
    methods:{
            addToCart(){
            	this.cart +=1
            },
            decrement(){
              if(this.cart == 0){
                this.cart=0
              }else{
              	  this.cart -=1
              }
            },
            updateProduct(index){           	
              this.selectedVariant=index,
              this.image = this.variants[index].variantImage

            }
    	},
      computed:{
        title(){
          return this.brand + ' '+ this.product
        },

        inStock(){
         return this.variants[this.selectedVariant].variantQty
        }
      },


});