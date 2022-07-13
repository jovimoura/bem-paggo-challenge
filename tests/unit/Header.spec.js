import { mount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header.vue', () => {
  const wrapper = mount(Header)

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
