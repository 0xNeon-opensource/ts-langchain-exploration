import { ComponentMeta, ComponentStory } from '@storybook/react';
import TemplateName, { TemplateNameProps } from './TemplateName';
import { mockTemplateNameProps } from './TemplateName.mocks';

export default {
  title: 'CHANGE_ME/TemplateName',
  component: TemplateName,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TemplateName>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TemplateName> = (args) => (
  <TemplateName {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTemplateNameProps.base,
} as TemplateNameProps;
