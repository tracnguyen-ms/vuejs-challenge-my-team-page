import { shallowMount } from '@vue/test-utils';
import IndexPage from '~/pages/index';

describe('IndexPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IndexPage, {});
  });

  test('mounts properly', () => {
    // Test if wrapper is a Vue instance, previously `expect(wrapper.isVueInstance()).toBeTruthy();`
    expect(wrapper.vm).toBeTruthy();
  });

  test('page contains class `my-team`', () => {
    expect(wrapper.contains('.my-team')).toBe(true);
  });
});
