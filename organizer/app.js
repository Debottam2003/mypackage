#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";

const basePath = process.argv[2] || "./";

const folders = {
  images: [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "svg",
    "bmp",
    "ico",
    "avif",
    "tiff",
  ],

  videos: [
    "mp4",
    "mkv",
    "avi",
    "mov",
    "wmv",
    "flv",
    "webm",
    "mpeg",
  ],

  audio: [
    "mp3",
    "wav",
    "ogg",
    "flac",
    "aac",
    "m4a",
  ],

  documents: [
    "pdf",
    "doc",
    "docx",
    "txt",
    "rtf",
    "odt",
    "md",
  ],

  spreadsheets: [
    "xls",
    "xlsx",
    "csv",
    "ods",
  ],

  presentations: [
    "ppt",
    "pptx",
    "odp",
  ],

  codes: [
    "js",
    "ts",
    "jsx",
    "tsx",
    "py",
    "java",
    "c",
    "cpp",
    "cs",
    "go",
    "rs",
    "php",
    "rb",
    "swift",
    "kt",
    "scala",
    "html",
    "css",
    "scss",
    "json",
    "xml",
    "yaml",
    "yml",
    "sql",
    "sh",
    "ipynb"
  ],

  archives: [
    "zip",
    "rar",
    "7z",
    "tar",
    "gz",
    "bz2",
    "xz",
  ],

  executables: [
    "exe",
    "msi",
    "deb",
    "rpm",
    "apk",
    "appimage",
  ],

  fonts: [
    "ttf",
    "otf",
    "woff",
    "woff2",
  ],

  temp: [
    "tmp",
    "log",
    "cache",
    "bak",
    "old",
  ],

  design: [
    "psd",
    "fig",
    "ai",
    "xd",
    "sketch",
  ],

  ebooks: [
    "epub",
    "mobi",
    "azw3",
  ],
};

const ignoredFolders = [
  ...Object.keys(folders),
  "others",
  "node_modules",
  ".git",
];

async function ensureFolders() {
  for (const folder of Object.keys(folders)) {
    await fs.mkdir(path.join(basePath, folder), {
      recursive: true,
    });
  }

  await fs.mkdir(path.join(basePath, "others"), {
    recursive: true,
  });
}

function getFolder(ext) {
  for (const [folder, exts] of Object.entries(folders)) {
    if (exts.includes(ext)) {
      return folder;
    }
  }

  return "others";
}

async function organize() {
  try {
    await ensureFolders();

    const files = await fs.readdir(basePath);

    for (const file of files) {
      // skip hidden files
      if (file.startsWith(".")) {
        continue;
      }

      const fullPath = path.join(basePath, file);

      const stat = await fs.stat(fullPath);

      // skip folders
      if (stat.isDirectory()) {
        if (ignoredFolders.includes(file)) {
          continue;
        }

        continue;
      }

      const ext = path.extname(file)
        .slice(1)
        .toLowerCase();

      const folder = getFolder(ext);

      const targetPath = path.join(
        basePath,
        folder,
        file
      );

      // avoid moving into same location
      if (fullPath === targetPath) {
        continue;
      }

      await fs.rename(fullPath, targetPath);

      console.log(`Moved: ${file} -> ${folder}/`);
    }

    console.log("\nOrganization complete!");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

organize();