import {create} from 'zustand';

const useCartStore = create((set,get)=>({
    cartItems:[],
    addToCart:(product)=>{
        const items = get().cartItems;
        const existingItem = items.find((item)=>item.id === product.id);

        // if item already exists then just increase the quantity otherwise add the item object in cartItems 
        if(existingItem){
            set({ cartItems : items.map((item)=>item.id===product.id?{...item, quantity:item.quantity+1}:item)
        });
        } else {
            set({ cartItems:[...items, {...product, quantity:1}] })
        };
    },

    removeToCart:(id)=>{
        set({cartItems:get().cartItems.filter((item)=>item.id !== id)})
    },

    increaseQuantity:(id)=>{
        set({cartItems:get().cartItems.map((item)=> item.id === id?{...item, quantity:item.quantity +1}:item)})
    },

    decreaseQuantity:(id)=>{
        set({cartItems:get().cartItems.map((item)=> item.id === id?{...item,quantity:item.quantity-1}:item).filter((item)=>item.quantity > 0)})
    },

    totalItems:()=>get().cartItems.reduce((sum,item)=>sum+item.quantity,0),

    totalPrice:()=>get().cartItems.reduce((sum,item)=>sum+item.price * item.quantity, 0)



}
))

export default useCartStore;