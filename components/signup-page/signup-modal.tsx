import Modal from 'react-modal';
import SignupComponent from './signup-component';
import { useRouter } from 'next/router';
import styles from './singup-modal.module.css';
Modal.setAppElement('#__next');

const SignupModal: React.FC = () => {
	const router = useRouter();

	// if its a modal page (via query) then overlay click will close it, else it wont do anything (if visited by url)
	const isOpen = !!router.query.signup || router.pathname === '/signup';
	const onRequestClose = !!router.query.signup ? () => router.back() : undefined;
	return (
		<Modal
			className={styles.modal + ' absolute-center'}
			overlayClassName={styles.overlay}
			contentLabel="sign up"
			isOpen={isOpen}
			onRequestClose={onRequestClose}>
			<SignupComponent />
		</Modal>
	);
};
export default SignupModal;
