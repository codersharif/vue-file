
Vue.component('product',{
   props:{
     premium:{
      type:Boolean,
      required:true
     }
   },
   template:`
   <div class="product">
   <div class="product-image"><a :href="url"> 
   <img :src="image" v-bind:alt="text"/>
      </a>
     </div>
    <div class="product-info">
       <h1>{{title}} </h1>
       <p v-if="inStock">In stock</p>
       <p v-else
        :class="{textDecoration:!inStock}"
        >out stock</p>
        <p>shipping: {{shipping}}</p>
       <ul>
        <li v-for="detail in details">{{detail}}</li>
       </ul>
       <div class="color-box"
        v-for="(variant,index) in variants" 
        :key="variant.variantId"
        :style="{backgroundColor:variant.variantColor}" 
        @mouseover="updateProduct(index)">
       </div>
       <div class="cart">
        <button
         @click="addToCart"
         :disabled="!inStock"
         :class="{disabledButton:!inStock}"
         >Add to Cart</button>
        <button @click="decrement">Decriment</button>
        <p>Cart({{cart}})</p>
       </div>
    </div>
  </div>
  `,

   data(){
    return {
      product:'Socks',
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
    }
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
        },
        shipping(){
          if(this.premium){
            return "free"
          }else{
            return 2.99
          }
        }
      },


});

var app=new Vue({
    el:'#app',
    data:{
      premium:true
    }
});