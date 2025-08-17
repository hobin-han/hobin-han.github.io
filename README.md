# hobin — iOS Developer

A minimal, fast, and clean personal site ready for **GitHub Pages**.

## Deploy (User site)

1. Create a repo named **your-username.github.io** (replace with your GitHub username).
2. Put these files in the root of the repo.
3. Commit and push to the **main** branch.
4. Your site will be live at `https://your-username.github.io/` in ~1–2 minutes.

## Deploy (Project site)

1. In any repo, put the site under `/docs` or at root.
2. Go to **Settings → Pages**.
3. **Build and deployment → Source**: choose *Deploy from a branch*.
4. Select branch `main` and folder `/root` (or `/docs`). Save.

## Custom domain (optional)

- Add a `CNAME` file at root with your domain: `example.com`
- In your DNS, add an **ALIAS/ANAME** (root) or **CNAME** (www) to `your-username.github.io`.
- Keep the `CNAME` file tracked to avoid GitHub Pages overwriting it.

## Notes

- `404.html` enables client-side 404 on Pages.
- `robots.txt` and `sitemap.xml` help SEO.
- `.nojekyll` disables Jekyll processing if you ever need folders starting with `_`.
- Replace every instance of `your-username` and metadata in `index.html`, `manifest.json`, and `sitemap.xml`.
