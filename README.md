# Iowa City DSA Website

The IC DSA website was originally hosted on Wix. We have decided to [cancel our subscription with Wix](https://boycottwix.org/), an Israeli company, in solidarity with Palestine and [the BDS movement](https://bdsmovement.net/). We decided to go with GitHub Pages to make it easier for others to collaborate on the website and ensure portability in the future.

A development (demo) version of the website is available at <https://iowacitydsa.org>.

Members with varying technical skills can contribute to the development of the website and its content. 

## Editing Content
Content can be edited with at least a minimal knowledge of [Markdown](https://www.markdownguide.org/basic-syntax/), though some knowledge of YAML and HTML would be helpful as well.

All content for the website is stored in the [./src](./src) directory. Files ending in *.md (such as [./src/index.md](./src/index.md)) are web pages written in Markdown. There may also be web pages in other directories within [./src](./src) such as [./src/projects](./src/projects) which holds pages that describe various projects that the IC DSA is working on. The [./src/assets] folder will contain other files like images, css, and javascript that are loaded by the web pages. Folders with an underscore "_" should be avoided, as these will contain important templates or data that make the website run; these are managed by developers.

## Development
Changing the layout or theme will require more skills, including Node.js, [Nunjucks](https://mozilla.github.io/nunjucks/), [11ty](https://www.11ty.dev/), HTML, and CSS.

### Installing Node.js and Node Package Manager (NPM)
Node.js (and NPM) is available on a wide variety of operating systems (including Windows, Linux, and MacOS). Often, package managers used by these systems have outdated builds of Node.js. To install Node.js, it may be best to [go to their website](https://nodejs.org/en/download/package-manager) and follow the instructions there to get the latest version and use a version manager.

### Getting started
This is a quick-start guide starting from a fresh clone with Node.js and NPM installed. Feel free to add additional sections as needed for clarity.

```
git clone git@github.com:wjdenny/icdsa.git
cd icdsa
npm install
npm run serve
```

The `npm run serve` command can be used any time to build and view local changes to the project.

## Conventional Commits
This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) to ensure consistent and understandable commit messages. This builds on the basic idea of Semantic Versioning with updates labeled patch, minor, and major. The only "major" or "breaking change" commits in this project would be commits that would break people's links or bookmarks to the site; so any changes to filenames of web pages or directories that contain web pages. See examples below.

Commit messages should be prefixed with either `fix: `, `feat: `, or `style: ` depending on the type of change. Fix commits are changes that correct some behavior that was not working properly. This might include a buggy template or CSS or wrong information on a web page. Feature (feat) commits add new functionality to the website. This would include a new webpage or a new template. Style commits can either change the CSS of a website or make minor edits to content for clarity or flow None of these types of commits should render previously working links inaccessible. 

Any changes that do break links should include an excalamation point after the label to identify it as a "breaking change." 

### Examples
```
fix: index template now correctly lists all projects
fix: update contact info for steering committee
feat: index template now lists working groups
feat: add minutes template for meeting minutes
style: fix typo in bench building description
style: use DSA-red color instead of basic red
feat!: move site to www.iowacitydsa.org
```
