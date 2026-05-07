# PassGener 🔐

A simple and fast CLI tool to generate secure random passwords and IDs directly from your terminal.

---

## ✨ Features

- Generate random passwords instantly
- Custom password length support
- Lightweight and fast
- Easy CLI usage
- Built with Node.js

---

## 📦 Installation

Install globally using npm:

```bash
npm install -g passgener
```

Or use directly with `npx`:

```bash
npx passgener
```

---

## 🚀 Usage

### Default Password

Generates an 8-character password:

```bash
passgener
```

Example output:

```txt
(Default length used) Password/Id: A8xkP21z
```

---

### Custom Length

Use `-l` or `--length`:

```bash
passgener -l 16
```

or

```bash
passgener --length 16
```

Example output:

```txt
Password/Id: mK82xPq91AbZ7LwQ
```

---

## ⚠️ Error Handling

### Missing Length

```bash
passgener -l
```

Output:

```txt
Provide the length value.
```

---

### Invalid Length

```bash
passgener -l abc
passgener --length -5
```

Output:

```txt
Length must be a number.
Length must be greater than 0.
```

---

## 🛠 Tech Stack

- Node.js
- ES Modules
- CLI Utilities

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Made with ❤️ by Debottam