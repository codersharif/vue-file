var value='Socks';

var app=new Vue({
    el:'#app',
    data:{
    	product:value,
    	image:"./img/pic.jpg",
    	text:"shirt",
    	url:"shirt.html",
    	InStock:false,
    	// inventory:100,
    	details:["80% cotton","20% polyester","Gender-natural"],
    	variants:[
          {
          	variantId:2234,
          	variantColor:"green",
          	variantImage:"./img/green.png"
          },
          {
          	variantId:2235,
          	variantColor:"blue",
          	variantImage:"./img/blue.jpeg"
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
            updateProduct(variantImage){
            	this.image =variantImage 
            }
    	}


});