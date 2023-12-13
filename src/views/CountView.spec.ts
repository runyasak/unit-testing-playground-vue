import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import CounterView from './CounterView.vue'

test('should render `Count: 0`', () => {
  const wrapper = mount(CounterView)
  wrapper.text().match(/Count: 0/i)
})

test('should render `Count: 1`', async () => {
  const wrapper = mount(CounterView)

  const button = wrapper.find('[data-testid="increment"]')

  await button.trigger('click')

  wrapper.text().match(/Count: 1/i)
})

test('should render `Count: 2`', async () => {
  const wrapper = mount(CounterView)

  const button = wrapper.find('[data-testid="increment"]')

  await button.trigger('click')
  await button.trigger('click')

  wrapper.text().match(/Count: 2/i)
})
