import { mount } from '@vue/test-utils'
import modal from '@/components/Modal.vue'


describe('modal', () => {
    test('Does modal contain title', () => {
        const wrapper = mount(modal, { propsData: { modalTitle: 'TestModalTitle', modalContent: ['1'] } })
        //wrapper.find("button.btn").trigger("click")
        expect(wrapper.text()).toContain('TestModalTitle')
    })
})