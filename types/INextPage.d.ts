import { NextPage } from 'next';

export type INextPage = NextPage & {
	hideLayout?: boolean;
};
