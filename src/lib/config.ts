const config = {
	/** Set during initialization, see "../../../vite.config.ts" */
	mode: '',
	baseUrl: '/',
	isPlugin: false,
	isProduction: false,
	name: 'project-mac',
	init(mode: string) {
		this.mode = mode;
		this.isPlugin = mode === 'plugin';
		this.isProduction = mode === 'production';
		this.baseUrl = mode === 'plugin' ? '/projects/mac' : '/';
		return Promise.resolve(this.baseUrl);
	},
	sanitizeRoute(path: string) {
		if (!path.includes(this.baseUrl)) {
			return false;
		}

		return this.isPlugin ? path.replace(this.baseUrl, '') : '';
	},
};

export default config;
