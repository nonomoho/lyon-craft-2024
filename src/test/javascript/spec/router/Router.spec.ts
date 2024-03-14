import { CommandesVue } from '@/common/primary/commandes';
import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { AppVue } from '@/common/primary/app';

import router from '@/router/router';

let wrapper: VueWrapper;

const wrap = () => {
  wrapper = shallowMount(AppVue, {
    global: {
      stubs: ['router-link', 'router-view'],
    },
    router,
  });
};

describe('Router', () => {
  it('should go to CommandesVue', async () => {
    wrap();
    await router.push('/commandes');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(CommandesVue)).toBeTruthy();
  });
});
