import { shallowMount } from '@vue/test-utils';
import PageIndex from '~/pages/index';
import { members } from '~/spec/sample-data/members';

describe('IndexPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PageIndex, {
      data() {
        return {
          members: members,
        };
      },
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
    expect(wrapper.find('.member-card__name').text()).toBe(members[0].name);
  });
});
