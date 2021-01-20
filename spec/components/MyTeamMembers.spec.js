import { shallowMount } from '@vue/test-utils';
import MyTeamMembersComponent from '~/components/MyTeamMembers';
import { sampleMembers } from '~/spec/sample-data/members';

describe('MyTeamMembersComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MyTeamMembersComponent, {
      propsData: {
        members: sampleMembers,
      },
    });
  });

  test('mounts properly', () => {
    // Test if wrapper is a Vue instance, previously `expect(wrapper.isVueInstance()).toBeTruthy();`
    expect(wrapper.vm).toBeTruthy();
  });

  test('page contains class `my-team__members`', () => {
    expect(wrapper.contains('.my-team__members')).toBe(true);
  });

  test('page has correct data', () => {
    expect(wrapper.find('.member-card__name').text()).toBe(
      sampleMembers[0].name
    );
  });

  test('page has correct total items', () => {
    expect(wrapper.findAll('.member-card__name').length).toBe(
      sampleMembers.length
    );
  });
});
