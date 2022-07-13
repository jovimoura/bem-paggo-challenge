import { shallowMount } from '@vue/test-utils'
import Form from '../../src/components/Form.vue'
import Header from '../../src/components/Header.vue'

describe('Form.vue', () => {
  const wrapper = shallowMount(Form)

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has Header component', () => {
    expect(wrapper.findComponent(Header).exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Quais adesivos')
    expect(wrapper.html()).toContain('Quantos adesivos de cada')
    expect(wrapper.html()).toContain('Forma de pagamento')
  })

  it('has input', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('has select', () => {
    expect(wrapper.find('select').exists()).toBe(true)
  })

  it('has textarea', () => {
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('has button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Enviar')
  })
})
