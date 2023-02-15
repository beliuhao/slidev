# Slidev Example

## Play with `Slidev`

The best way of understanding `Slidev` is to try it, with the following command:

```bash
# Skip this step if you're already familiar with `Slidev`
yarn init slidev@latest
```

## Build Single Page Applications (SPA) for GitHub Pages

### Init this project

```bash
yarn install
# Or install slidev globally
# Then use it everywhere without creating a new project
yarn i -g @slidev/cli
```

### Update your slides

You can update your slides content by editing the `slides.md` file.

For multiple slide entries, you can [check here](./pages/multiple-entries.md).

### Build the slides into a self-hostable SPA

```bash
yarn run build
# Or use slidev directly if it's globally installed
slidev build --base /slidev/
```

The generated application will be available under `dist/`, rename it to `docs/`

You need to push `docs/` folder to GitHub repo for GitHub Pages hosting.

## Further reading

Learn more at [Slidev](https://sli.dev).
