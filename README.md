# IEM QA Dashboard

An internal QA dashboard for quick access to IEM tools and services.

## Structure

```
iem-bookmark-dashboard/
├── index.html        # Main HTML entry point
├── css/
│   └── styles.css    # All styles and CSS variables
├── js/
│   └── app.js        # Bookmark data, categories, and UI logic
├── .gitignore
└── README.md
```

## Usage

Open `index.html` directly in a browser. No build step or server required.

## Adding Bookmarks

Edit the `BOOKMARKS` array in [js/app.js](js/app.js). Each entry takes the shape:

```js
{
  title: "Display Name",
  url: "https://example.com",
  category: "Category Name",
  favicon: "https://www.google.com/s2/favicons?domain=example.com&sz=64"
}
```

Category names must match a key in the `CATEGORIES` object at the top of `app.js`.

## Adding Categories

Add a new entry to the `CATEGORIES` object in [js/app.js](js/app.js):

```js
"My New Category": { icon: "🔧", color: "#hexcolor", colorDim: "rgba(r,g,b,0.08)" }
```
