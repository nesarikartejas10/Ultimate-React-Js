import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const store = (set, get) => ({
  count: 1,
  name: "code bless you",
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },

  capitalize: () => {
    const { name } = get();
    set({
      name: name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    });
  },
});

const useMyStore = create(
  devtools(
    persist(store, {
      name: "mystore",
      /*store data in session storage*/
      storage: createJSONStorage(() => sessionStorage),
    }),
  ),
);

export default useMyStore;
