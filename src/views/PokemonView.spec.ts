import { describe, expect, it, vi, type Mock } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import PokemonsView from './PokemonsView.vue'
import axios from 'axios'

vi.mock('axios')

const mockAxios = axios.get as Mock

describe('PokemonsView', () => {
  it('should render pokemon list', async () => {
    mockAxios.mockResolvedValue({
      data: [{ name: 'Hello' }, { name: 'World' }]
    })

    const wrapper = mount(PokemonsView)

    await flushPromises()

    console.log(wrapper.text())
    expect(wrapper.text()).toMatch(/Hello/i)
  })
})
