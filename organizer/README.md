# 📂 File Organizer CLI

A simple and fast Node.js CLI tool that automatically organizes files into folders based on their extensions.

Perfect for cleaning messy Downloads folders, project directories, or shared drives.

---

## ✨ Features

- 📁 Automatically sorts files by type
- ⚡ Fast and lightweight
- 🧠 Smart extension mapping
- 🚫 Ignores system & important folders
- 🔄 Creates folders automatically
- 🖥️ Works on Windows, macOS, and Linux
- 📦 Easy to install and use

---

## 📦 Supported Categories

| Folder | File Types |
|---|---|
| `images` | jpg, jpeg, png, gif, webp, svg, bmp, ico, avif, tiff |
| `videos` | mp4, mkv, avi, mov, wmv, flv, webm, mpeg |
| `audio` | mp3, wav, ogg, flac, aac, m4a |
| `documents` | pdf, doc, docx, txt, rtf, odt, md |
| `spreadsheets` | xls, xlsx, csv, ods |
| `presentations` | ppt, pptx, odp |
| `codes` | js, ts, jsx, tsx, py, java, c, cpp, cs, go, rs, php, rb, swift, kt, scala, html, css, scss, json, xml, yaml, yml, sql, sh, ipynb |
| `archives` | zip, rar, 7z, tar, gz, bz2, xz |
| `executables` | exe, msi, deb, rpm, apk, appimage |
| `fonts` | ttf, otf, woff, woff2 |
| `temp` | tmp, log, cache, bak, old |
| `design` | psd, fig, ai, xd, sketch |
| `ebooks` | epub, mobi, azw3 |
| `others` | Unknown file types |

---

## 🚀 Installation

### Install Globally

```bash
npm install -g file-organizer-cli
```

---

## 🛠 Usage

### Organize Current Directory

```bash
file-organizer
```

### Organize Specific Directory

```bash
file-organizer ./Downloads
```

or

```bash
file-organizer "C:/Users/YourName/Desktop"
```

---

## 📂 Example

### Before

```bash
Downloads/
├── movie.mp4
├── photo.png
├── report.pdf
├── script.js
```

### After

```bash
Downloads/
├── videos/
│   └── movie.mp4
│
├── images/
│   └── photo.png
│
├── documents/
│   └── report.pdf
│
├── codes/
│   └── script.js
```

---

## ⚙️ How It Works

The CLI:

1. Reads all files from the target directory
2. Detects file extensions
3. Matches extensions with predefined categories
4. Creates folders automatically
5. Moves files into the correct folders

---

## 🚫 Ignored Folders

The following folders are skipped automatically:

```bash
node_modules
.git
images
videos
audio
documents
others
...
```

This prevents recursive moving and protects important project folders.

---

## 🌟 Future Improvements

- Recursive directory organization
- Duplicate file handling
- Preview mode (`--dry-run`)
- Custom config support
- Watch mode for automatic organization

---

## 🤝 Contributing

Pull requests are welcome.

Feel free to improve categories, add new features, or optimize performance.

---

## 📜 License

MIT License © 2026

---

## 👨‍💻 Author

Built with ❤️ by Debottam Kar