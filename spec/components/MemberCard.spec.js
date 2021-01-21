import { shallowMount } from '@vue/test-utils';
import MemberCardComponent from '~/components/MemberCard';
import { sampleMembers } from '~/spec/sample-data/members';

describe('MemberCardComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MemberCardComponent, {
      propsData: {
        member: sampleMembers[0],
      },
    });
  });

  test('mounts properly', () => {
    // Test if wrapper is a Vue instance, previously `expect(wrapper.isVueInstance()).toBeTruthy();`
    expect(wrapper.vm).toBeTruthy();
  });

  test('page has correct data', () => {
    expect(wrapper.find('.member-card__name').text()).toBe(
      sampleMembers[0].name
    );
  });
});
