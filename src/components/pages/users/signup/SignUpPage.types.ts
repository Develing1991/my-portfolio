import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form/dist/types';

/* Container */

/* Presenter */
export interface ISignUpPagePresenterProps {
	register: UseFormRegister<FieldValues>;
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	formState: FormState<FieldValues>;
	termsCheck: boolean[];
	onClickCheckTerms: (index: number) => () => void;
	onSubmitCreateUser: (data: Record<string, string>) => void;
}

/* components.presenter */
