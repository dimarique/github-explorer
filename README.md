# 🔍 GitHub Explorer

A web application for searching GitHub users and browsing their repositories. Built with React 19, TypeScript, and the GitHub REST API.

<img src="./public/screenshots/preview.png" width="100%"/>

## ✨ Features

- **User search** — enter a GitHub username to fetch their public profile and repositories
- **User profile card** — displays avatar, name, bio, location, blog link, join date, and "available for hire" status
- **Stats overview** — shows public repository count, followers, and following
- **Repository list** — paginated list of repos (30 per page) with name, description, language badge, star and fork counts, creation date, and last push date
- **Repo metadata** — forked and archived repos are visually marked; homepage links are shown when available
- **Pagination** — navigate between pages of repositories with Prev/Next buttons
- **Recent searches** — the last 5 searched users are saved to `localStorage` and shown on the start screen for quick re-access
- **Light / dark theme** — toggle between themes; preference is persisted in `localStorage`
- **Scroll-to-top button** — appears after scrolling down 300px
- **Error handling** — displays a message if the user is not found or the request fails

## 📸 Screenshots

<table>
  <tr>
    <td><img src="./public/screenshots/main_page.PNG" width="400"/></td>
    <td><img src="./public/screenshots/main_page_dark.PNG" width="400"/></td>
  </tr>
  <tr>
    <td align="center">Light theme</td>
    <td align="center">Dark theme</td>
  </tr>
  <tr>
    <td><img src="./public/screenshots/user_info.PNG" width="400"/></td>
    <td><img src="./public/screenshots/repo_info.PNG" width="400"/></td>
  </tr>
  <tr>
    <td align="center">User profile</td>
    <td align="center">Repository list</td>
  </tr>
</table>

## 🛠️ Built With

- **React 19** — UI library
- **TypeScript** — type safety throughout, with types from `@octokit/openapi-types`
- **CSS Modules** — component-scoped styles
- **GitHub REST API** — data source (no authentication required)
- **Lucide React** — icons
- **Vite** — build tool

## 🚀 Live Demo

[gregarious-tulumba-38d01f.netlify.app](https://gregarious-tulumba-38d01f.netlify.app)

## 👤 Author

**Dmytro Kuzmenko**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
