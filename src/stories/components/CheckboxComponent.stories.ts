import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CheckboxComponent from "../../components/FieldComponent/CheckboxComponent/CheckboxComponent"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Checkbox Component',
  component: CheckboxComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onChange: fn((event: React.MouseEvent) => {
  //   event.preventDefault();
  //   open: false
  //   // console.log("Buton Clicked", args)
  //   // args.open = !args
  // })}
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const CheckboxComponentStory: Story = {
  args: {
    id: "checkbox-story",
    value: "checked",
    label: "label",
    name: "checkbox",
    checked: true,
    hasError: false,
    ariaLabel: "arialabel",
    onChange: (e) => {
      console.log("e", e.target.value)
    }
  },
};