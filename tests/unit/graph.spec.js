import { mount } from '@vue/test-utils'
import homePageMachine from '@/components/HomePageMachine.vue'


describe('graph', () => {
    test('Does graph contain correct name', () => {
        const wrapper = mount(homePageMachine, { propsData: { chartName: 'TestChart1' } })
        //wrapper.find("button.btn").trigger("click")
        expect(wrapper.text()).toContain('TestChart1')
    })
})