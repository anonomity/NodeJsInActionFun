import events from 'events';
import fs from 'fs';

export default class Watcher extends events.EventEmitter {
	watchDir: string;
	processedDir: string;
	constructor(watchDir: string, processedDir : string) {
		super();
		this.watchDir = watchDir;
		this.processedDir = processedDir;
		}

		watch() {
			fs.readdir(this.watchDir, (err : any, files : Array<string>) => {
				if (err) throw err;
				for (var index in files) {
					this.emit('process', files[index]);
				}
			});
		}
		start () {
			fs.watchFile(this.watchDir, () => {
				this.watch();
			});
		}
}

