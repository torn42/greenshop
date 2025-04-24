import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<{ id: number; quantity: number }[]>(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  const addToCart = (productId: number) => {
    const existingItem = cart.value.find((item) => item.id === productId);

    if (!existingItem) {
      cart.value.push({ id: productId, quantity: 1 });
      saveCartToLocalStorage();
    }
  };

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter((item) => item.id !== productId);
    saveCartToLocalStorage();
  };

  const clearCart = () => {
    cart.value = [];
    saveCartToLocalStorage();
  };

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
