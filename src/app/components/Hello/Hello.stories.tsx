import { Meta, StoryFn } from "@storybook/react";
import { Hello } from "./Hello";

export default {
    title: "Hello",
    component: Hello,
} as Meta;

export const Default: StoryFn = () => <Hello />;
