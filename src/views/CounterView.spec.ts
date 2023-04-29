import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import CounterView from './CounterView.vue'
import { nextTick } from 'vue'

describe('Counter', () => {
  it('should render count as 1 when click increment 1 time', async () => {
    const wrapper = mount(CounterView)
    const incrementButton = wrapper.find('[data-testid="increment"]')

    incrementButton.trigger('click')

    await nextTick()

    console.log(wrapper.text())
    expect(wrapper.text()).toMatch(/Count: 1/i)
  })
})
