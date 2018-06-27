// import Vue from 'vue'
import { mount } from 'vue-test-utils'
import SignIn from '@/components/user/sign_in'

describe('sign_in.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(SignIn)
    expect(wrapper.vm.password).toEqual('')
  })
})
