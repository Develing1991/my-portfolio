// 상세
import Head from 'next/head';
import CommunityDetailPageContainer from '@/src/components/pages/community/detail/CommunityDetailPage.container';
import { IBoard } from '@/src/commons/types/generated/types';
import { FETCH_BOARD } from '@/src/components/pages/community/detail/CommunityDetailPage.queries';
import { GraphQLClient } from 'graphql-request';
import { GetServerSidePropsContext } from 'next';

export default function CommunityDetailPage({ fetchBoard }: { fetchBoard: IBoard }) {
	return (
		<>
			<Head>
				<meta property="og:kewords" content={fetchBoard.title} />
				<meta property="og:writer" content={fetchBoard.writer ?? ''} />
				<meta property="og:title" content={fetchBoard.title} />
				<meta property="og:url" content={`http://localhost:3000/community/detail/${fetchBoard._id}`} />
				<meta property="og:image" content={fetchBoard.images?.[0]} />
				<meta property="og:description" content={fetchBoard.contents} />
			</Head>
			<CommunityDetailPageContainer />
		</>
	);
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	if (!process.env.API_URL) return;
	const graphQLClient = new GraphQLClient(process.env.API_URL);
	const { fetchBoard } = await graphQLClient.request(FETCH_BOARD, { boardId: String(context.query.id) });
	return {
		props: {
			fetchBoard
		}
	};
};
