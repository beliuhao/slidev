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
# Checkout to the `source` branch
git checkout source

# Build the slides into static files
# Or use slidev directly if it's globally installed
# slidev build --base /slidev/
yarn run build
```

The generated application will be available under `dist/`.

You need to push everything under `dist/` folder to the `master` branch.

## Further reading

Learn more at [Slidev](https://sli.dev).
