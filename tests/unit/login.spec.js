import { mount } from "@vue/test-utils";
import login from '@/views/login.vue'


describe("login.vue", () => {
  const wrapper = mount(login);

  it('We check if the test works', () => {
    expect(true).toBeTruthy();
  });

  it('The component has been painted', () => {
    expect(wrapper.attributes().id).toBe('login')
  });

  it('document painted', () => {
     expect(wrapper.html()).toContain( 'login');
  });

});
