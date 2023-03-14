import fs from 'fs';

interface Page {
  name: string;
}

const getPages = (pagesDir: string): Promise<Page[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(pagesDir, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const tsxFiles = files
        .filter(
          (file) =>
            file.endsWith('.tsx') &&
            !file.startsWith('_') &&
            file !== 'index.tsx'
        )
        .map((file) => file.replace(/\.tsx$/, ''));

      const pages = tsxFiles.map((file) => ({
        name: file,
      }));

      resolve(pages);
    });
  });
};

export default getPages;
