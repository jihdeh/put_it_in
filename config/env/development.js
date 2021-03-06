'use strict';

module.exports = {
	db: {
		uri: 'mongodb://localhost/mean-dev',
		options: {
			user: '',
			pass: ''
		}
	},
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'dev',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			//stream: 'access.log'
		}
	},
	app: {
		title: 'Put It In - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '748093765273616',
		clientSecret: process.env.FACEBOOK_SECRET || 'e9d868d9b040d879b2b74bd2fe5f1fc9',
		callbackURL: 'https://glacial-scrubland-6293.herokuapp.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '2qH0qR4BfMeG2HTvy8ZtIvpDN',
		clientSecret: process.env.TWITTER_SECRET || 'Ehmfq5MnZIOzR9HTO3cOeKvbCwwIW0ir1pUusyY2g8canpMj6g',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '351501032015-r2d12lt54je377fhaacdiah06ehkf6tc.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'q2dnHkTgFqBkTKyCAcsef_Ub',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77ag6lvgnawyej',
		clientSecret: process.env.LINKEDIN_SECRET || '0o11SUsvxloHcaUH',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
