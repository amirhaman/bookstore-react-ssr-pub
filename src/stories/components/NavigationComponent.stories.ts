import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Navigation Component',
  component: NavigationComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: { type: "select", options: ["contained", "outlined", "text"] } },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn((event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Buton Clicked")
  }
)}
} satisfies Meta<typeof NavigationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const NavigationComponentStory: Story = {};