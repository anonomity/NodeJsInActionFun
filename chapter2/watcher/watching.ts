import fs from 'fs';
import Watcher from './watcher';
const watchDir = './test'
const processedDir = './testlocation'

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', (file: string) => {
	const watchFile = `${watchDir}/${file}`;
	const processedFile = `${processedDir}/${file.toLowerCase()}`;
	fs.rename(watchFile, processedFile, (err: any) => {
		if (err) throw err;
	});
});

watcher.start();
