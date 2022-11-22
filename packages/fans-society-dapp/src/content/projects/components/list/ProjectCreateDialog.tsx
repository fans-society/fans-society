import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
} from '@mui/material';
import { useState } from 'react';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'state-types';

import { CREATE_PROJECT, ICreateProjectParams } from '../../actions';

interface IProjectCreateDialogProps {
	dialogVisible: boolean;
	setDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({
	dialogVisible,
	setDialogVisible,
}: IProjectCreateDialogProps) => {
	const dispatch = useDispatch();

	const { txPending } = useSelector((state: RootState) => state.projects);
	const [formData, setFormData] = useState<Partial<ICreateProjectParams>>({});

	return (
		<Dialog
			disableEscapeKeyDown
			maxWidth={'sm'}
			aria-labelledby={'new-project-title'}
			open={dialogVisible}
		>
			<DialogTitle id={'new-project-title'}>{'Create new project'}</DialogTitle>
			<DialogContent dividers>
				<FormContainer
					defaultValues={formData}
					onSuccess={(data: ICreateProjectParams) => {
						setFormData(data);
						dispatch(CREATE_PROJECT.request(data));
						setDialogVisible(false);
					}}
				>
					<Stack direction={'column'}>
						<TextFieldElement
							type={'text'}
							name={'authorAddress'}
							label={'Productor address'}
							required={true}
						/>
						<br />
						<TextFieldElement
							type={'text'}
							name={'name'}
							label={'Name'}
							required={true}
						/>
						<br />
						<TextFieldElement
							type={'text'}
							name={'symbol'}
							label={'Symbol'}
							required={true}
						/>
						<br />
						<TextFieldElement
							type={'text'}
							name={'description'}
							label={'Description'}
							required={true}
						/>
						<br />
						<TextFieldElement
							type={'number'}
							name={'target'}
							label={'Amount goal'}
							required={true}
						/>
						<br />
						<TextFieldElement
							type={'number'}
							name={'minInvest'}
							label={'Minimal invest amount'}
							required={true}
						/>
						<br />
						<LoadingButton
							loading={txPending}
							loadingPosition={'end'}
							variant={'contained'}
							color={'primary'}
							endIcon={<SendIcon />}
							type={'submit'}
						>
							Submit
						</LoadingButton>
					</Stack>
				</FormContainer>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={() => setDialogVisible(false)} color={'primary'}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};