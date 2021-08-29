import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";

import router from "@/router";

import Home from "./Home";

// https://vue-test-utils.vuejs.org/guides/using-with-vue-router.html
const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Home", () => {
  function renderHome() {
    const wrapper = mount(Home, {
      localVue,
      router,
    });

    // const wrapper = mount(Home, {
    //   mocks: {
    //     $route: {
    //       path: "/",
    //     },
    //   },
    // });

    return {
      querySelector: (selector) => wrapper.find(selector),
    };
  }

  // $router 모킹 하는 법 v
  it("renders title", () => {
    const { querySelector } = renderHome();

    expect(querySelector("h1").text()).toBe("Welcome to Your Vue.js App");
    expect(querySelector("p").text()).toBe("pathname: /");
  });
});
