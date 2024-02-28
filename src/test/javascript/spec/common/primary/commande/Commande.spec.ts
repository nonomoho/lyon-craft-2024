import { CommandeVue } from '@/common/primary/commande';
import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper;

const wrap = () => {
  wrapper = shallowMount(CommandeVue);
};

describe('App', () => {
  it('should exist', () => {
    wrap();

    expect(wrapper.exists()).toBeTruthy();
  });
});
