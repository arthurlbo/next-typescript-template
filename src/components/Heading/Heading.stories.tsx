import { Meta, Story } from "@storybook/react";
import { Heading } from "./Heading";

export default {
    title: "Heading",
    component: Heading,
} as Meta;

export const Default: Story = () => <Heading />;
