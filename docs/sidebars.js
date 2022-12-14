/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Introduction"
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installation",
        "getting-started/deploy-an-api",
        "getting-started/connect-a-service-to-the-api",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/working-with-extension",
        "guides/validation",
        "guides/mocking",
        "guides/timeouts",
        "guides/routing",
        "guides/cors",
        "guides/rate-limit",
        "guides/basic-auth",
        "guides/cert-manager",
        "guides/cache",
        "guides/observability",
        "guides/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Kusk CLI",
      items: [
        {
          type: "doc",
          id: "cli/overview",
          label: "Installation"
        },
        "cli/install-cmd",
        "cli/mock-cmd",
        "cli/generate-cmd",
        "cli/dashboard-cmd",
      ],
    },
    {
      type: "category",
      label: "Kusk Dashboard",
      items: [
        "dashboard/overview",
        "dashboard/deploying-apis",
        "dashboard/inspecting-apis",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/extension",
        "reference/openapi",
        {
          type: "category",
          label: "Kusk Resources",
          items: [
            "reference/customresources/overview",
            "reference/customresources/api",
            "reference/customresources/envoyfleet",
            "reference/customresources/staticroute",
          ],
        },
      ],
    },
    {
      type: "doc",
      label: "Contributing",
      id: "contributing"
    },
    {
      type: "doc",
      id: "privacy",
      label: "Privacy"
    },
  ],
};

module.exports = sidebars;
