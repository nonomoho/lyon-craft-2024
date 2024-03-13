import { CommandesVue } from '@/common/primary/commandes';
import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper;

const wrap = () => {
  wrapper = shallowMount(CommandesVue);
};

describe('App', () => {
  it('should exist', () => {
    wrap();

    expect(wrapper.exists()).toBeTruthy();
  });
});
