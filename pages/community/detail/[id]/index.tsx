// 상세
import CommunityDetailPageContainer from '@/src/components/pages/community/detail/CommunityDetailPage.container';
import { IBoard, IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD, LIKE_BOARD } from '@/src/components/pages/community/detail/CommunityDetailPage.queries';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { GetServerSidePropsContext } from 'next';

export default function CommunityDetailPage({ fetchBoard }: { fetchBoard: IBoard }) {
	const { query } = useRouter();
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, { variables: { boardId: String(query.id) } });
	const LikeBoardGQL = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);

	return (
		<>
			<Head>
				<meta property="og:title" content={fetchBoard.writer ?? ''} />
				<meta property="og:url" content={`http://localhost:3000/community/detail/${query.id}`} />
				<meta property="og:image" content={fetchBoard.images?.[0]} />
				<meta property="og:description" content={fetchBoard.contents} />
			</Head>
			<CommunityDetailPageContainer fetchBoard={data?.fetchBoard} LikeBoardGQL={LikeBoardGQL} query={query} />
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
