import {
	Box,
	Divider,
	LinearProgress,
	Typography,
	useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useSelector } from 'react-redux';

import { RootState } from 'state-types';

import SuspenseLoader from 'src/components/SuspenseLoader';
import { Routes } from 'src/router';
import { ProjectStatus } from 'src/store/amm/actions';
import ProjectWrapper from '../../../../components/ProjectWrapper/index';
import ProjectActions from 'src/content/projects/components/detail/ProjectActions';

const LinearProgressWrapper = styled(LinearProgress)(
	({ theme }) => `
		flex-grow: 1;
		height: 10px;

		&.MuiLinearProgress-root {
			background-color: ${theme.colors.alpha.black[10]};
		}

		.MuiLinearProgress-bar {
			border-radius: ${theme.general.borderRadiusXl};
		}
  	`,
);

export default ({}) => {
	const theme = useTheme();

	const { currentProject, commitments } = useSelector(
		(state: RootState) => state.amm,
	);

	if (!currentProject.item || currentProject.loading) {
		return <SuspenseLoader />;
	}

	return (
		<ProjectWrapper
			name={currentProject.item.name}
			description={currentProject.item.description}
			linkBackRoute={Routes.PROJECT_LIST}
			avatarImageUrl={currentProject.item.avatarImageUrl}
			coverImageUrl={currentProject.item.coverImageUrl}
			actions={
				<ProjectActions
					projectId={currentProject.item.id}
					capabilities={currentProject.item.$capabilities}
				/>
			}
			content={
				<>
					{currentProject.item.status < ProjectStatus.Launched && (
						<Box py={2} pl={2} mb={3}>
							<Box>
								<div style={{ color: theme.palette.text.secondary }}>
									Minimum invest amount
								</div>
								<div style={{ fontSize: '1.5em' }}>
									{currentProject.item.minInvest} ETH
								</div>
							</Box>
							<Box>
								<div style={{ color: theme.palette.text.secondary }}>
									Maximum invest amount
								</div>
								<div style={{ fontSize: '1.5em' }}>
									{currentProject.item.maxInvest} ETH
								</div>
							</Box>
							<Box>
								<Typography variant={'subtitle2'} gutterBottom>
									Funds received:{'  '}
									<span style={{ color: '#bc3aab' }}>
										<b>{currentProject.item.fund}</b>
									</span>{' '}
									ETH
									<b> / {currentProject.item.target} ETH</b>
								</Typography>
								<LinearProgressWrapper
									value={(currentProject.item.fund / currentProject.item.target) * 100}
									color={'primary'}
									variant={'determinate'}
								/>
							</Box>

							<Box>
								<Divider variant="middle" />
								<div style={{ color: theme.palette.text.secondary }}>My share</div>
								<div style={{ fontSize: '1.5em' }}>
									{commitments.items[currentProject.item.id] || 0} ETH
								</div>
							</Box>
						</Box>
					)}
					{currentProject.item.status === ProjectStatus.Launched && <div>TODO</div>}
				</>
			}
		/>
	);
};
