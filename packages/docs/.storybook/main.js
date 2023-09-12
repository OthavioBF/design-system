import { dirname, join } from "path";
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  staticDirs: ["../public"],

  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }

    return config
  }
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
