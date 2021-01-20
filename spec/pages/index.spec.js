import { shallowMount } from '@vue/test-utils';
import IndexPage from '~/pages/index';
import { sampleMembers } from '~/spec/sample-data/members';

describe('IndexPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IndexPage, {
      data() {
        return {
          members: sampleMembers,
        };
      },
    });
  });

  test('mounts properly', () => {
    // Test if wrapper is a Vue instance, previously `expect(wrapper.isVueInstance()).toBeTruthy();`
    expect(wrapper.vm).toBeTruthy();
  });

  test('page contains class `my-team`', () => {
    expect(wrapper.contains('.my-team')).toBe(true);
  });

  test('page has correct total items', () => {
    expect(wrapper.findAll('.member-card__name').length).toBe(
      sampleMembers.length
    );
  });
});
