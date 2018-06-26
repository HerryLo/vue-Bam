import Vue from 'vue'
import SignIn from '@/components/user/sign_in'

describe('sign_in.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SignIn)
    const vm = new Constructor().$mount()
    expect(vm).toEqual('Welcome to Your Vue.js App')
  })
})
