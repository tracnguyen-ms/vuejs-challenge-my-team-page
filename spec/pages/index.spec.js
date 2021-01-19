import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import IndexPage from '~/pages/index';
import members from '~/spec/sample-data/members';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('IndexPage', () => {
  let store, wrapper;

  beforeAll(() => {
    store = new Vuex.Store({
      state: {
        members: members,
      },
    });

    wrapper = mount(IndexPage, {
      store,
      localVue,
    });
  });

  test('mounts properly', () => {
    // Test if wrapper is a Vue instance, previously `expect(wrapper.isVueInstance()).toBeTruthy();`
    expect(wrapper.vm).toBeTruthy();
  });

  test('page contains class `my-team`', () => {
    expect(wrapper.contains('.my-team__members')).toBe(true);
  });

  test('page has correct data', () => {
    expect(
      wrapper.find('.my-team__members__member-card__name:first-child').text()
    ).toBe(members[0].name);
  });
});
