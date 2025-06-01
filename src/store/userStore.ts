import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as { id: number; name: string; email: string }[],
  }),
  actions: {
    addUser(user: { id: number; name: string; email: string }) {
      this.users.push(user);
    },
  },
});
