import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "./App";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  function renderApp() {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    return {
      wrapper,
      querySelector: (selector) => wrapper.find(selector),
      querySelectorAll: (selector) => wrapper.findAll(selector),
    };
  }

  it("renders links", () => {
    const { querySelectorAll } = renderApp(router);

    expect(querySelectorAll("a").at(0).text()).toBe("Home");
    expect(querySelectorAll("a").at(1).text()).toBe("About");
  });

  it("listens 'home link' click event", async () => {
    const { wrapper, querySelector, querySelectorAll } = renderApp(router);

    await querySelectorAll("a").at(0).trigger("click");
    await wrapper.vm.$nextTick();

    expect(querySelector("p").text()).toBe("pathname: /");
  });

  // a링크 테스트 하는 법 v
  it("listens 'about link' click event", async () => {
    const { wrapper, querySelector, querySelectorAll } = renderApp();

    await querySelectorAll("a").at(1).trigger("click");
    await wrapper.vm.$nextTick();

    expect(querySelector("p").text()).toBe("어바웃 페이지입니다.");
  });

  // 모든 라우터에 대한 테스트 코드 작성 v
  it("/", async () => {
    const { wrapper, querySelector } = renderApp();

    router.replace("/");
    await wrapper.vm.$nextTick();

    expect(querySelector("p").text()).toBe("pathname: /");
  });

  it("/about", async () => {
    const { wrapper, querySelector } = renderApp();

    router.replace("/about");
    await wrapper.vm.$nextTick();

    expect(querySelector("p").text()).toBe("어바웃 페이지입니다.");
  });
});
