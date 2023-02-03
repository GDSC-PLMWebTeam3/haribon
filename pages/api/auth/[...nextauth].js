import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import EmailProvider from 'next-auth/providers/email';
import MongoClientPromise from '../../../lib/mongodb';
import { signIn } from "next-auth/react";


const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

export default NextAuth({
	secret: process.env.SECRET,
	session: {
		strategy: 'jwt',
		maxAge: THIRTY_DAYS,
		updateAge: THIRTY_MINUTES
	},
	adapter: MongoDBAdapter(MongoClientPromise),
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD
				}
			},
			from: `HARIBON ${process.env.EMAIL_FROM}`,
		})
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = user.email.endsWith(process.env.PLM_EMAIL);
			if (isAllowedToSignIn) {
				return true;
			} else {
				return false;
			}
		}
	},
	pages: {
		signIn: '/',
		verifyRequest: '/verify',
		error: '/error'
	}
});